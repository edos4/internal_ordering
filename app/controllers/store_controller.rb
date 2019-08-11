class StoreController < ApplicationController
  layout false
  def index
    @promos =  Promo.all
    @merchant = Merchant.all
  end

  def menu
  end

  def cart
  end
  
  def checkout
  end

  def completed
  end
end
