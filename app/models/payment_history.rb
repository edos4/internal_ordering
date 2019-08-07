class PaymentHistory < ApplicationRecord
	belongs_to :amortization
	belongs_to :ar_account, optional: true
end
