class OrderItem < ApplicationRecord
	belongs_to :order
	has_one :variant
	belongs_to :variant, optional: true
end
