class CreatePromos < ActiveRecord::Migration[5.2]
  def change
    create_table :promos do |t|
      t.string :image
      t.string :desc
      t.string :url

      t.timestamps
    end
  end
end
