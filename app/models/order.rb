class Order < ApplicationRecord
	belongs_to :driver, optional: true
	has_many :order_items
	belongs_to :driver, optional: true
end
