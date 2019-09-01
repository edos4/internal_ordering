class AddShareUrlToOrder < ActiveRecord::Migration[5.2]
  def change
  	add_column :orders, :share_url, :string
  end
end
