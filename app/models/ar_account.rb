class ArAccount < ApplicationRecord
	#belongs_to :payment_histories, optional: true
	#has_one :payment_history
	has_one :payment_history
	has_many :amortizations
end
