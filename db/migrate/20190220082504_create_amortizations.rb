class CreateAmortizations < ActiveRecord::Migration[5.2]
  def change
    create_table :amortizations do |t|
      t.string :customer
      t.string :blocklot
      t.float :contract_price
      t.float :processing_fees
      t.float :downpayment
      t.integer :terms
      t.float :interest
      t.float :monthly_amort
      t.date :contract_date

      t.timestamps
    end
  end
end
