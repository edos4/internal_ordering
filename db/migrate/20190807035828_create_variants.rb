class CreateVariants < ActiveRecord::Migration[5.2]
  def change
    create_table :variants do |t|
      t.string :name
      t.string :image
      t.float :price
      t.integer :product_id

      t.timestamps
    end
  end
end
