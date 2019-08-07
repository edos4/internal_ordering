class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :messenger_id
      t.string :custumer_name
      t.string :contact_no
      t.string :address
      t.string :coordinates
      t.string :delivery_option
      t.string :payment_option
      t.string :reference_number
      t.string :message

      t.timestamps
    end
  end
end
