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
xlsx = Roo::Excelx.new("#{Dir.pwd}/supermarket.xlsx", {:expand_merged_ranges => true})
binding.pry