class CreatePromos < ActiveRecord::Migration[5.2]
  def change
    create_table :promos, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :image
      t.string :desc
      t.string :url

      t.timestamps
    end
  end
end
