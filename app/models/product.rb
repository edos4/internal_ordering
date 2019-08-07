class Product < ApplicationRecord
	belongs_to :merchant
	has_many :variants
end
