class CreateVariants < ActiveRecord::Migration[5.2]
  def change
    create_table :variants, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :name
      t.string :image
      t.float :price
      t.string :product_id

      t.timestamps
    end
  end
end
