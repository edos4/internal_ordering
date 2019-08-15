class AddDriverIdToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :driver_id, :string
  end
end
