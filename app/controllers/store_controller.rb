class StoreController < ApplicationController
  layout false
  def index
    @promos =  Promo.all
    @merchant = Merchant.all
  end

  def menu
    @categories = Category.where(merchant_id: params['id'])
  end

  def cart
    @product = Product.find(params['product'])
    @variants = @product.variants
  end
  
  def checkout
  end

  def completed
  end
end
