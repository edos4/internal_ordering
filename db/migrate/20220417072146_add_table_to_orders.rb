class AddTableToOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :table_num, :string
  end
end
