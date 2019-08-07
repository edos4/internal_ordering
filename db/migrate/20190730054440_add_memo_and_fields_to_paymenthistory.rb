class AddMemoAndFieldsToPaymenthistory < ActiveRecord::Migration[5.2]
  def change
  	add_column :payment_histories, :deposited_memo, :string
  	add_column :payment_histories, :deposited_bank_account_id, :integer
  end
end
