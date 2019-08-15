class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :merchant_id

      t.timestamps
    end
  end
end
