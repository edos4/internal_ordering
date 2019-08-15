class CreateOrderItems < ActiveRecord::Migration[5.2]
  def change
    create_table :order_items, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.integer :variant_id
      t.integer :quantity
      t.string :cancel_option
      t.integer :order_id

      t.timestamps
    end
  end
end
