# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Seed
#User.create(email: 'admin@example.com', password: 'password', role: 'admin')

# Populate tables
require 'roo'
xlsx = Roo::Excelx.new("#{Dir.pwd}/menu.xlsx", {:expand_merged_ranges => true})
data = xlsx.parse.drop(1) #drop the header on line 1

#purge tables
StoreType.destroy_all
Merchant.destroy_all
Category.destroy_all
Product.destroy_all
Variant.destroy_all
Order.destroy_all
OrderItem.destroy_all

Merchant.create!(name: "Arffogato Dog Cafe")

data.each do |d|
	category_name = d[0]
	product_name = d[1]
	price = d[2]

	category = Category.find_or_create_by!(name: category_name)
	product = Product.find_or_create_by!(name: product_name, category_id: category.id, price: price)
end

Setting.create(key: "store_header", text_value: "Two line tag line here!")

