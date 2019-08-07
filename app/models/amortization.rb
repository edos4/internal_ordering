class Amortization < ApplicationRecord
	has_many :amortization_line_items
	has_many :payment_histories
	belongs_to :ar_account
	def self.compute_amort(amort_id)
	amort = Amortization.find(amort_id)
	@balance = amort.contract_price.to_f - (amort.processing_fees.to_f + amort.downpayment.to_f)
	@monthly_amort = FinanceMath::Loan.new(nominal_rate: amort.interest_rate, duration: amort.terms, amount: @balance).pmt
	end
end
