class AddColumnToPromosTable < ActiveRecord::Migration[5.2]
  def change
    add_column :promos, :title, :string
    add_column :promos, :sub_desc, :string
  end
end
