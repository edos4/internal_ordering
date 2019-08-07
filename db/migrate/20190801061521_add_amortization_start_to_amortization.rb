class AddAmortizationStartToAmortization < ActiveRecord::Migration[5.2]
  def change
    add_column :amortizations, :amortization_start_date, :date
  end
end
