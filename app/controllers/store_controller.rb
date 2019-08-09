class StoreController < ApplicationController
  layout false
  def index
    @promos =  Promo.all
    @merchant = Merchant.all
  end
end
