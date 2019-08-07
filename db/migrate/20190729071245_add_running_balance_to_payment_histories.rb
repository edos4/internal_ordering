class AddRunningBalanceToPaymentHistories < ActiveRecord::Migration[5.2]
  def change
  	add_column :payment_histories, :running_balance, :float
  end
end
