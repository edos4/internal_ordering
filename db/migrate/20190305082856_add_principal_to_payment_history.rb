class AddPrincipalToPaymentHistory < ActiveRecord::Migration[5.2]
  def change
    add_column :payment_histories, :principal, :float
  end
end
