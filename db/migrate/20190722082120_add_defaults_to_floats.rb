class AddDefaultsToFloats < ActiveRecord::Migration[5.2]
  def change
  	change_column :payment_histories , :interest , :float, default: 0.0
  	change_column :payment_histories , :payment , :float,default: 0.0
  	change_column :payment_histories , :new_balance , :float,default: 0.0
  	change_column :payment_histories , :penalty , :float,default: 0.0
  	change_column :payment_histories , :processing , :float,default: 0.0
  	change_column :payment_histories , :reservation , :float,default: 0.0
  	change_column :payment_histories , :equity , :float,default: 0.0
  	change_column :payment_histories , :others , :float,default: 0.0
  	change_column :payment_histories , :advance_payment_to_principal , :float,default: 0.0
  end
end
