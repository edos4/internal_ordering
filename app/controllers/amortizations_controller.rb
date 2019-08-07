class AmortizationsController < ApplicationController
  before_action :set_amortization, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  before_action :restrict_access_to_boss
  # GET /amortizations
  # GET /amortizations.json
  def index
    if current_user.role == 'boss'
      redirect_to "/summary_collections"
    end
    @amortizations = Amortization.all
  end

  def check_downpayment
    customer_id = params['customer']
    amortization = Amortization.find(customer_id)

    paid_downpayment = amortization.payment_histories.sum(:downpayment)
    downpayment = amortization.downpayment

    paid_processing_fee = amortization.payment_histories.sum(:processing_fee)
    processing_fee = amortization.processing_fees

    render json: {
      has_paid: paid_downpayment < downpayment, 
      downpayment: downpayment, 
      balance: downpayment-paid_downpayment,
      has_paid_processing: paid_processing_fee < processing_fee,
      processing_fee: processing_fee,
      processing_fee_balance: processing_fee-paid_processing_fee
    }
  end

  def compute_monthly_amort
    interest_rate = params['interest_rate']
    terms = params['terms']
    balance = params['balance']
    monthly_amort = FinanceMath::Loan.new(nominal_rate: interest_rate, duration: terms, amount: balance).pmt
    monthly_amort = sprintf "%.2f", monthly_amort
    render json: monthly_amort
  end

  def process_pay
    params.permit!
    customer = Amortization.find(params["customer_payments"]["id"]);

    unless params['customer_payments']['payment'] == "0" 
      next_line = customer.amortization_line_items.where(is_paid: false).first
      next_term = next_line.term
      next_period = next_line.period

      customer.amortization_line_items.where(is_paid: false).destroy_all 
      customer_balance = customer.balance
      interest = customer.balance * (customer.interest.to_f/12)/100
      principal = params["customer_payments"]["payment"].to_f - interest
      balance = customer.balance - principal
      monthly_amort = principal + interest
      customer.update!(balance: balance)
      
      AmortizationLineItem.create!(amortization_id: customer.id, term: next_term, principal: principal, interest: interest.to_f, monthly_amort: monthly_amort.to_f, balance: balance.to_f, period: next_period, is_paid: true)
      
      term = next_term + 1
      period = next_period + 1.months
      tmp_bal = customer.balance
      while tmp_bal >= 0
        t_interest = tmp_bal * (customer.interest.to_f/12) / 100
        t_principal = customer.monthly_amort.to_f - t_interest.to_f
        t_balance = tmp_bal - t_principal.to_f

        t_period = period
        
        if t_balance < customer.monthly_amort
          tmp_amort = AmortizationLineItem.create!(amortization_id: customer.id, term: term, principal: t_principal.to_f, interest: t_interest.to_f, monthly_amort: customer.monthly_amort.to_f, balance: t_balance.to_f, period: t_period)
          tmp_amort = AmortizationLineItem.create!(amortization_id: customer.id, term: term, principal: t_balance.to_f, interest: t_interest.to_f, monthly_amort: t_balance.to_f + t_interest.to_f, balance: 0, period: t_period)
          break
        else
          tmp_amort = AmortizationLineItem.create!(amortization_id: customer.id, term: term, principal: t_principal.to_f, interest: t_interest.to_f, monthly_amort: customer.monthly_amort.to_f, balance: t_balance.to_f, period: t_period)
        end

        tmp_bal = t_balance
        term += 1
        period = t_period + 1.months
      end
    end #ends check for if not paying payments

    histories = Amortization.find(customer.id).payment_histories
    sum = 0
    sum += histories.sum(:penalty)
    sum += histories.sum(:downpayment)
    sum += histories.sum(:processing_fee)
    sum += histories.sum(:principal)

    if histories.count == 0
      running_balance = customer.contract_price
    else
      running_balance = customer.contract_price-sum
    end

    payment_history = PaymentHistory.create(
      amortization_id: customer.id, 
      current_balance: customer_balance,
      interest: interest, 
      principal: principal,
      payment: params["customer_payments"]["payment"],
      new_balance: balance,
      mode_of_payment:  params["customer_payments"]["mode_of_payment"],
      check_bank: params["customer_payments"]["check_bank"],
      check_no: params["customer_payments"]["check_no"],
      bank_account_id: params["customer_payments"]["bank_account_id"],
      ar_account_id: customer.ar_account_id,
      penalty: params["customer_payments"]["penalty"],
      processing: params["customer_payments"]["processing"],
      reservation: params["customer_payments"]["reservation"],
      others: params["customer_payments"]["others"],
      equity: params["customer_payments"]["equity"],
      advance_payment_to_principal: params["customer_payments"]["advance_payment_to_principal"],
      downpayment: params["customer_payments"]["downpayment"],
      processing_fee: params["customer_payments"]["processing_fee"],
      or_num: params["customer_payments"]["or_num"],
      payment_date: params["customer_payments"]["payment_date"],
      memo: params["customer_payments"]["memo"],
      running_balance: running_balance
    )

    redirect_to customer
  end

  # GET /amortizations/1
  # GET /amortizations/1.json
  def show
  end

  # GET /amortizations/new
  def new
    @amortization = Amortization.new
  end

  # GET /amortizations/1/edit
  def edit
  end

  # POST /amortizations
  # POST /amortizations.json
  def create
    params.permit!
    @amortization = Amortization.new(amortization_params)

    @amortization.balance = @amortization.contract_price.to_f - (@amortization.processing_fees.to_f + @amortization.downpayment.to_f)

    respond_to do |format|
      if @amortization.save
        monthly_amort = FinanceMath::Loan.new(nominal_rate: @amortization.interest.to_i, duration: @amortization.terms.to_i, amount: @amortization.balance.to_f).pmt
        @amortization.update(balance: @amortization.balance, monthly_amort: monthly_amort)

        terms = @amortization.terms.to_i
        contract_price = @amortization.contract_price.to_i
        processing_fees = @amortization.processing_fees.to_i
        downpayment = @amortization.downpayment.to_f
        interest_rate = @amortization.interest.to_i
        balance =  @amortization.balance.to_f
        interset = balance * (interest_rate.to_f/12) / 100
        #PaymentHistory.create!(amortization_id: @amortization.id, interest: 0, payment: 0, new_balance: balance,principal: downpayment)
        term = 1
        tmp_bal = balance
        while tmp_bal >= 0
          t_interest = tmp_bal * (@amortization.interest.to_f/12) / 100
          t_principal = monthly_amort.to_f - t_interest.to_f
          t_balance = tmp_bal - t_principal.to_f

          period = @amortization.amortization_start_date + term.months - 1.months
          t_period = period.strftime("%b-%Y").to_date
          
          line_item = AmortizationLineItem.create!(amortization_id: @amortization.id, term: term, principal: t_principal.to_f, interest: t_interest.to_f, monthly_amort: monthly_amort.to_f, balance: t_balance.to_f, period: t_period)
          
          tmp_bal = t_balance
          term += 1
        end
        AmortizationLineItem.where(amortization_id: @amortization.id).last.destroy!

        format.html { redirect_to @amortization, notice: 'Amortization was successfully created.' }
        format.json { render :show, status: :created, location: @amortization }
      else
        format.html { render :new }
        format.json { render json: @amortization.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /amortizations/1
  # PATCH/PUT /amortizations/1.json
  def update
    respond_to do |format|
      if @amortization.update(amortization_params)
        format.html { redirect_to amortizations_url, notice: 'Amortization was successfully updated.' }

      else
        format.html { render :edit }
        format.json { render json: @amortization.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /amortizations/1
  # DELETE /amortizations/1.json
  def destroy
    @amortization.amortization_line_items.destroy_all
    @amortization.payment_histories.destroy_all
    @amortization.destroy
    respond_to do |format|
      format.html { redirect_to amortizations_url, notice: 'Amortization was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_amortization
      @amortization = Amortization.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def amortization_params
      params.require(:amortization).permit(:check_no, :check_bank, :memo, :or_num, :payment_date, :processing_fee, :downpayment, :ar_account_id, :customer, :blocklot, :contract_price, :processing_fees, :downpayment, :terms, :interest, :monthly_amort, :contract_date, :amortization_start_date)
    end
end
