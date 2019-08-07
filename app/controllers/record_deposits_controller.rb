class RecordDepositsController < ApplicationController
  before_action :set_amortization, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  before_action :restrict_access_to_cashier
  before_action :restrict_access_to_boss
  def index
    params.permit!
    @customer_ledger_deposited = PaymentHistory.select("payment_histories.*, ar_accounts.name as ar_name").where(is_deposited: true).joins(:ar_account)
    @customer_ledger_undeposited = PaymentHistory.select("payment_histories.*, ar_accounts.name as ar_name").where(is_deposited: false).joins(:ar_account)
    if params['amortization'].present?
      @customer_ledger_deposited = @customer_ledger.where(amortization_id: params['amortization'], is_deposited: true)
      @customer_ledger_undeposited = @customer_ledger.where(amortization_id: params['amortization'], is_deposited: false)
    end
    if params[:up].present?
      @customer_ledger_deposited = @customer_ledger_deposited.where('payment_date BETWEEN ? AND ? AND ?', params[:up][:start_date].to_date, params[:up][:end_date].to_date, is_deposited: true)
      @customer_ledger_undeposited = @customer_ledger_undeposited.where('payment_date BETWEEN ? AND ? AND ?', params[:up][:start_date].to_date, params[:up][:end_date].to_date, is_deposited: false)
    else
      @customer_ledger_deposited = @customer_ledger_deposited
      @customer_ledger_undeposited = @customer_ledger_undeposited
    end
  end

  def record_deposit
    params.permit!
    payment_history = PaymentHistory.find(params['record_deposit']['payment_history_id'])
    payment_history.update(
      deposited_memo: params['record_deposit']['record_deposit_memo'],
      deposited_date: Date.parse(params['record_deposit']['date_paid']),
      is_deposited: true,
      deposited_bank_account_id: params['record_deposit']['deposit_to']
    )
    redirect_to '/record_deposits'
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
