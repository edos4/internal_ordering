class AddMerchantIdToCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :merchant_id, :integer
  end
end
