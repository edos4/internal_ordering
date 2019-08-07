class AmortizationLineItem < ApplicationRecord
	belongs_to :amortizations, optional: true
end
