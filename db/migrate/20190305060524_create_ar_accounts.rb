class CreateArAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :ar_accounts do |t|
      t.string :name

      t.timestamps
    end
  end
end
