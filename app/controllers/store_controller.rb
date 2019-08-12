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

  def view_cart
    params.permit!
    messenger_id = params['messenger_id']
    @order = Order.where(messenger_id: messenger_id, status: "Open")
  end
  
  def checkout
  end

  def completed
  end
end
