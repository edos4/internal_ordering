class AddProcessingFeeToPaymentHistories < ActiveRecord::Migration[5.2]
  def change
    add_column :payment_histories, :processing_fee, :float
  end
end
