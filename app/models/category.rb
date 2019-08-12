class Category < ApplicationRecord
	belongs_to :merchant, optional: true
	has_many :products
end

