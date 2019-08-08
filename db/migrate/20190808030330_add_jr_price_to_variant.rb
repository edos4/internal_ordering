class AddJrPriceToVariant < ActiveRecord::Migration[5.2]
  def change
  	add_column :variants, :grocery_price, :float
  end
end
