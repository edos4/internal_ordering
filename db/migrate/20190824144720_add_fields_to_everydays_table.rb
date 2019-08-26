class AddFieldsToEverydaysTable < ActiveRecord::Migration[5.2]
  def change
    add_column :everydays, :description, :string
    add_column :everydays, :ev_order, :string
  end
end
