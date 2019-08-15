class AddColumnTextValueAndImageValueToSetting < ActiveRecord::Migration[5.2]
  def change
    add_column :settings, :text_value, :string
    add_column :settings, :image_value, :string
  end
end
