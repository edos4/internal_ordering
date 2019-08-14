class AddCompanyNameToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :company_name, :string
  end
end
