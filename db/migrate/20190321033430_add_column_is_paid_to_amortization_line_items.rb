class AddColumnIsPaidToAmortizationLineItems < ActiveRecord::Migration[5.2]
  def change
  	add_column :amortization_line_items, :is_paid, :boolean, default: 0
  end
end
