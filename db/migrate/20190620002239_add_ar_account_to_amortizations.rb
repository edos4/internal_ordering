class AddArAccountToAmortizations < ActiveRecord::Migration[5.2]
  def change
  	add_column :amortizations, :ar_account_id, :integer
  end
end
