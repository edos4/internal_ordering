class SummaryReportsController < ApplicationController
  before_action :set_amortization, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  before_action :restrict_access_to_boss
  def index
    params.permit!
    @customer_ledger = PaymentHistory.all.select("payment_histories.*, ar_accounts.name as ar_name").joins(:ar_account)
    if params['amortization'].present?
      @customer_ledger = @customer_ledger.where(amortization_id: params['amortization'])
    end
    if params[:up].present?
      @customer_ledger = @customer_ledger.where('payment_date BETWEEN ? AND ?', params[:up][:start_date].to_date, params[:up][:end_date].to_date)
    else
      @customer_ledger = @customer_ledger
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
