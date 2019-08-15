class CreateMerchants < ActiveRecord::Migration[5.2]
  def change
    create_table :merchants, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :name
      t.string :logo
      t.integer :category_id

      t.timestamps
    end
  end
end
