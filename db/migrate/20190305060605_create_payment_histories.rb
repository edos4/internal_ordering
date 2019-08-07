class CreatePaymentHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :payment_histories do |t|
      t.integer :amortization_id
      t.float :current_balance
      t.float :interest
      t.float :payment
      t.float :new_balance
      t.string :mode_of_payment
      t.string :check_bank
      t.string :check_no
      t.integer :bank_account_id
      t.integer :ar_account_id
      t.float :penalty
      t.float :processing
      t.float :reservation
      t.float :equity
      t.float :others
      t.float :advance_payment_to_principal

      t.timestamps
    end
  end
end
