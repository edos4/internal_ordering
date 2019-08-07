class AddBalanceToAmortization < ActiveRecord::Migration[5.2]
  def change
  	add_column :amortizations, :balance, :float, default: 0
  end
end
