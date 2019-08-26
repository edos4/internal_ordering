class AddColumnToMerchantsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :merchants, :desc, :string
    add_column :merchants, :sub_desc, :string
    add_column :merchants, :price, :float
    add_column :merchants, :url, :string
  end
end
