class CreateSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :settings, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :key
      t.string :value

      t.timestamps
    end
  end
end
