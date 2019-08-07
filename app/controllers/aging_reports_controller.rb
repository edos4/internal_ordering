class AgingReportsController < ApplicationController
  before_action :set_amortization, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  # GET /amortizations
  # GET /amortizations.json
  def index
    params.permit!
    @data = []
    if params['ar_account_id'].present?
      @amortizations = Amortization.where(ar_account_id: params['ar_account_id'].to_i)
    else
      @amortizations = Amortization.all
    end

    if params['up'].present? && params['up']['start_date'].present?
      start_date = Date.parse(params['up']['start_date'])
    else
      start_date = Date.today
    end
    
    @amortizations.each do |amort|
      amortization_line_items = amort.amortization_line_items.where(is_paid: false)
      @data << {
        name: amort.customer,
        ar_account: amort.ar_account,
        cur: amort.balance,
        month1: amortization_line_items.where("period BETWEEN ? and ?", start_date, start_date+1.months).sum(:principal),
        month2: amortization_line_items.where("period BETWEEN ? and ?", start_date, start_date+2.months).sum(:principal) ,
        month3: amortization_line_items.where("period BETWEEN ? and ?", start_date, start_date+3.months).sum(:principal),
        month4: amortization_line_items.where("period > ?", start_date+3.months).sum(:principal),
        total: amortization_line_items.sum(:principal)
      }
    end

    # @customer_ledger_deposited = PaymentHistory.select("payment_histories.*, ar_accounts.name as ar_name").where(is_deposited: true).joins(:ar_account)
    # if params['amortization'].present?
    #   @customer_ledger_deposited = @customer_ledger.where(amortization_id: params['amortization'], is_deposited: true)
    # end
    # if params[:up].present?
    #   @customer_ledger_deposited = @customer_ledger_deposited.where('payment_date BETWEEN ? AND ? AND ?', params[:up][:start_date].to_date, params[:up][:end_date].to_date, is_deposited: true)
    # else
    #   @customer_ledger_deposited = @customer_ledger_deposited
    # end
  end

  def process_pay
    params.permit!
    customer = Amortization.find(params["customer_payments"]["id"]);
    customer_balance = customer.balance
    interest = customer.balance * (customer.interest.to_f/12)/100
    principal = params["customer_payments"]["payment"].to_f - interest
    balance = customer.balance - principal
    customer.update!(balance: balance)
    PaymentHistory.create(
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
    ar_account_id: params["customer_payments"]["ar_account_id"],
    penalty: params["customer_payments"]["penalty"],
    processing: params["customer_payments"]["processing"],
    reservation: params["customer_payments"]["reservation"],
    others: params["customer_payments"]["others"],
    equity: params["customer_payments"]["equity"],
    advance_payment_to_principal: params["customer_payments"]["advance_payment_to_principal"],
    or_num: params["customer_payments"]["or_num"],
    payment_date: params["customer_payments"]["payment_date"],
    memo: params["customer_payments"]["memo"],
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
        @amortization.update(balance: @amortization.balance)

        terms = @amortization.terms.to_i
        contract_price = @amortization.contract_price.to_i
        processing_fees = @amortization.processing_fees.to_i
        downpayment = @amortization.downpayment.to_f
        interest_rate = @amortization.interest.to_i
        balance =  @amortization.balance.to_f
        monthly_amort = FinanceMath::Loan.new(nominal_rate: interest_rate, duration: terms, amount: balance).pmt
        
        term = 1
        tmp_bal = balance
        while tmp_bal >= 0
          t_interest = tmp_bal * (@amortization.interest.to_f/12) / 100
          t_principal = monthly_amort.to_f - t_interest.to_f
          t_balance = tmp_bal - t_principal.to_f

          period = Date.current + term.months
          t_period = period.strftime("%b-%y")
          
          line_item = AmortizationLineItem.create!(amortization_id: @amortization.id, term: term, principal: t_principal.to_f, interest: t_interest.to_f, monthly_amort: monthly_amort.to_f, balance: t_balance.to_f, period: t_period)
          
          tmp_bal = t_balance
          term += 1
        end

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
        format.html { redirect_to @amortization, notice: 'Amortization was successfully updated.' }
        format.json { render :show, status: :ok, location: @amortization }
      else
        format.html { render :edit }
        format.json { render json: @amortization.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /amortizations/1
  # DELETE /amortizations/1.json
  def destroy
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
      params.require(:amortization).permit(:or_num, :memo, :payment_date, :customer, :blocklot, :contract_price, :processing_fees, :downpayment, :terms, :interest, :monthly_amort, :contract_date)
    end
end
