class CustomerPaymentsController < ApplicationController
  before_action :authenticate_user!
  before_action :restrict_access_to_boss
  def pay
    @customers = Amortization.all
  end

  def process_pay
    params.permit!
    binding.pry
  end
end
