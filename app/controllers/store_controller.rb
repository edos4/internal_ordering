class StoreController < ApplicationController
  before_action :messenger_only, :except => [:search_variant]
  layout false
  skip_before_action :verify_authenticity_token, :only => [:search_variant]

  
  def index
    params.permit!
    @messenger_id = params['messenger_id']
    redirect_to "/store/menu/#{Merchant.first.id}?messenger_id=#{@messenger_id}"
    # @promos =  Promo.all
    # @everydays = Everyday.all.order("created_at ASC")
    # @settings = Setting.all
    # order = Order.find_or_create_by!(messenger_id: @messenger_id, status: "Open")
    # @order = order
    # if params['type'].present?
    #   store_type = StoreType.where(name: params['type'])
    #   @merchant = Merchant.where(store_type_id: store_type[0].id).order(name: :asc)
    # else
    #   @merchant = Merchant.all.order(name: :asc)
    # end
  end

  def search_variant
    params.permit!
    messenger_id = params['messenger']
    variant = params[:variant].downcase
    @variants = Product.where(['name ILIKE ?', "%#{variant}%"]).order(name: :asc).limit(10)
    @variants = @variants.collect{|v| {merchant_id: v.category.merchant.id, product_id: v.id, product_name: v.name, messenger_id: messenger_id}}
    render json: @variants.to_json
  end

  def menu
    @categories = Category.order("name ASC")
    @messenger_id = params['messenger_id']
    @order = Order.find_or_create_by!(messenger_id: @messenger_id, status: "Open")

    order_items = []
    populars = {}
    orders = Order.where.not(status: "Open").order("created_at ASC")
    orders.collect{|x| order_items << x.order_items}
    @order_items = order_items.flatten

    @order_items.each do |oi|
      unless populars[oi.variant_id.to_s].present?
        populars[oi.variant_id.to_s] = oi.quantity
      else
        populars[oi.variant_id.to_s] += oi.quantity
      end
    end
    @populars = Hash[populars.sort_by{|k, v| v}.reverse].first(4)
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
    @order = Order.find_or_create_by!(messenger_id: messenger_id, status: "Open")
  end
  
  def checkout
    messenger_id = params['messenger_id']
    @order = Order.find_by(messenger_id: messenger_id, status: "Open")
  end

  def pending
    params.permit!
    @order = Order.find_by(messenger_id: params['messenger_id'], status: "Open")
    raw_coords = JSON.parse(params['order']['coordinates'])
    coords = "#{raw_coords['lat']},#{raw_coords['lng']}"
    @order.update!(custumer_name: params['order']['custumer_name'], contact_no: params['order']['contact_no'], address: params['delivery_address_attributes'], payment_option: params['order']['payment_option'], message: params['order']['message'], status: "Pending", coordinates: coords)
    redirect_to "/store/completed?messenger_id=#{params['messenger_id']}"
  end
  
  def completed
    @order = Order.first
  end

  private

  def messenger_only
    unless params['messenger_id'].present?
      redirect_to '/404.html'
    end
  end
end
