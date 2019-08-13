class StoreController < ApplicationController
  layout false
  def index
    @messenger_id = params['messenger_id']
    @promos =  Promo.all
    @merchant = Merchant.all
    order = Order.find_or_create_by!(messenger_id: @messenger_id, status: "Open")
  end

  def menu
    @categories = Category.where(merchant_id: params['id'])
  end

  def cart
    params.permit!
    messenger_id = params[:messenger_id]
    @product = Product.find(params['product'])
    @variants = @product.variants
    @order = Order.find_by(messenger_id: messenger_id, status: "Open")
  end

  def view_cart
    params.permit!
    messenger_id = params['messenger_id']
    @order = Order.find_by(messenger_id: messenger_id, status: "Open")
  end
  
  def checkout
  end

  def completed
  end
end
