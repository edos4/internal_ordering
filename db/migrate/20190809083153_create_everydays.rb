class CreateEverydays < ActiveRecord::Migration[5.2]
  def change
    create_table :everydays, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :ev_order
      t.string :category

      t.timestamps
    end
  end
end
