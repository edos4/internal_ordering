class AddCoordinatesToMerchants < ActiveRecord::Migration[5.2]
  def change
  	add_column :merchants, :coordinates, :string
  end
end
