class RemoveMerchantIdToProduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :merchant_id
  end
end
