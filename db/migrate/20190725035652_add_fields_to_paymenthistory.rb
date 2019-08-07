class AddFieldsToPaymenthistory < ActiveRecord::Migration[5.2]
  def change
  	add_column :payment_histories, :payment_date, :date
  	add_column :payment_histories, :or_num, :string
  	add_column :payment_histories, :memo, :string
  end
end
