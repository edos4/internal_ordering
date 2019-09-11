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
xlsx = Roo::Excelx.new("#{Dir.pwd}/SUPERMARKET.xlsx", {:expand_merged_ranges => true})
data = xlsx.parse.drop(1) #drop the header on line 1

#purge tables
StoreType.destroy_all
Merchant.destroy_all
Category.destroy_all
Product.destroy_all
Variant.destroy_all
Order.destroy_all
OrderItem.destroy_all

data.each do |d|
	store_type_name = d[0]
	merchant_name = d[1]
	category_name = d[2]
	product_name = d[3]
	variant_name = d[4]
	grocery_price = d[5]
	juan_ride_price = d[6]

	store_type = StoreType.find_or_create_by!(name: store_type_name)
	merch = Merchant.find_or_create_by!(name: merchant_name, store_type_id: store_type.id)
	category = Category.find_or_create_by!(name: category_name, merchant_id: merch.id)
	product = Product.find_or_create_by!(name: product_name, category_id: category.id)
	variant = Variant.find_or_create_by!(name: variant_name, product_id: product.id)
	variant.update!(grocery_price: grocery_price, price: juan_ride_price)
end

Setting.create(key: "store_header", text_value: "Two line tag line here!")

