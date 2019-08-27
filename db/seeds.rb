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

data.each do |d|
	merchant_name = d[0]
	category_name = d[1]
	product_name = d[2]
	variant_name = d[3]
	grocery_price = d[4]
	juan_ride_price = d[5]

	merch = Merchant.find_or_create_by!(name: merchant_name)
	category = Category.find_or_create_by!(name: category_name, merchant_id: merch.id)
	product = Product.find_or_create_by!(name: product_name, category_id: category.id)
	variant = Variant.find_or_create_by!(name: variant_name, product_id: product.id)
	variant.update!(grocery_price: grocery_price, price: juan_ride_price)
end

Setting.create(key: "store_header", text_value: "Two line tag line here!")

