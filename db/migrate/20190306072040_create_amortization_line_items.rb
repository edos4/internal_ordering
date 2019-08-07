class CreateAmortizationLineItems < ActiveRecord::Migration[5.2]
  def change
    create_table :amortization_line_items do |t|
      t.integer :term
      t.integer :amortization_id
      t.date :period
      t.float :principal
      t.float :interest
      t.float :monthly_amort
      t.float :balance

      t.timestamps
    end
  end
end
