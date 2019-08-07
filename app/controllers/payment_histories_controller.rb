class PaymentHistoriesController < ApplicationController
  before_action :set_payment_history, only: [:show, :edit, :update, :destroy]
  before_action :restrict_access_to_boss
  # GET /payment_histories
  # GET /payment_histories.json
  def index
    @payment_histories = PaymentHistory.all
  end

  # GET /payment_histories/1
  # GET /payment_histories/1.json
  def show
  end

  # GET /payment_histories/new
  def new
    @payment_history = PaymentHistory.new
  end

  # GET /payment_histories/1/edit
  def edit
  end

  # POST /payment_histories
  # POST /payment_histories.json
  def create
    @payment_history = PaymentHistory.new(payment_history_params)

    respond_to do |format|
      if @payment_history.save
        format.html { redirect_to @payment_history, notice: 'Payment history was successfully created.' }
        format.json { render :show, status: :created, location: @payment_history }
      else
        format.html { render :new }
        format.json { render json: @payment_history.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_histories/1
  # PATCH/PUT /payment_histories/1.json
  def update
    respond_to do |format|
      if @payment_history.update(payment_history_params)
        format.html { redirect_to @payment_history, notice: 'Payment history was successfully updated.' }
        format.json { render :show, status: :ok, location: @payment_history }
      else
        format.html { render :edit }
        format.json { render json: @payment_history.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_histories/1
  # DELETE /payment_histories/1.json
  def destroy
    @payment_history.destroy
    respond_to do |format|
      format.html { redirect_to payment_histories_url, notice: 'Payment history was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_history
      @payment_history = PaymentHistory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def payment_history_params
      params.require(:payment_history).permit(:amortization_id, :current_balance, :interest, :payment, :new_balance, :mode_of_payment, :check_bank, :check_no, :bank_account_id, :ar_account_id, :penalty, :processing, :reservation, :equity, :others, :advance_payment_to_principal)
    end
end
