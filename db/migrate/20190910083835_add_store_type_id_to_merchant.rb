class AddStoreTypeIdToMerchant < ActiveRecord::Migration[5.2]
  def change
    add_column :merchants, :store_type_id, :string
  end
end
