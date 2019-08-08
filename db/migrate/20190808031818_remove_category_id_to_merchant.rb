class RemoveCategoryIdToMerchant < ActiveRecord::Migration[5.2]
  def change
    remove_column :merchants, :category_id
  end
end
