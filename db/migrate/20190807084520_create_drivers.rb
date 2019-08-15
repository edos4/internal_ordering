class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :name
      t.string :devise_id

      t.timestamps
    end
  end
end
