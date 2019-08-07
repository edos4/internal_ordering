class AddIsDepositedToPaymentHistories < ActiveRecord::Migration[5.2]
  def change
  	add_column :payment_histories, :is_deposited, :boolean, default: false
  	add_column :payment_histories, :deposited_date, :date
  end
end
