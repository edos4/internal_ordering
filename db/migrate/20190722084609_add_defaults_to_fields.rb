class AddDefaultsToFields < ActiveRecord::Migration[5.2]
  def change
  	change_column :payment_histories , :processing_fee , :float,default: 0.0
  end
end
