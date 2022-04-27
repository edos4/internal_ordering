class OrdersController < ApplicationController
  # Open = ga add palang sa cart
  # Pending = after checkout
  # Processing = assigned to driver/processing order
  # En Route = Driver is on the way
  # Delivered = Orders were delivered
  # Cancelled = orders were cancelled before arriving
  # Rejected = orders delivered but rejected
  
  before_action :set_order, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token, :only => [:calculate_delivery_fee]
  layout false, only: [:track_order, :new]

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
    @order_items = Order.find(params['id']).order_items
  end

  # GET /orders/new
  def new
    @order = Order.new
    @categories = Category.order("name ASC")
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    @order = Order.new(order_params)
    @order.

    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    require 'rest-client'
    require 'json'

    @order.update(driver_id: params['order']['driver_id'], status: 'En route')
    @driver_id = @order.driver.devise_id

    payload = {"device_id" => @driver_id, "destination" => {"geometry" => {"type" => "Point", "coordinates" => [@order.coordinates.split(",").second.to_f,@order.coordinates.split(",").first.to_f]} } }.to_json

    req = RestClient::Request.new({
        method: :post,
        url: 'https://v3.api.hypertrack.com/trips',
        user: ENV["HYPERTRACK_ACCT_ID"],
        password: ENV["HYPERTRACK_SECRET_KEY"],
        payload: payload,
        headers: { :accept => :json, content_type: :json }
      }).execute do |response, request, result|
        case response.code
        when 400
          [ :error, parse_json(response.to_str) ]
        when 200..299
          parsed_body = JSON.parse(response.body)
          share_url = parsed_body['views']['share_url']
          @order.update(share_url: share_url)
        else
          fail "Invalid response #{response.to_str} received."
        end
      end
    BotController.send_chatfuel(@order.messenger_id, "track_order", @order.id, @driver_id)
    redirect_to orders_url
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def track_order
    require 'rest-client'
    order = Order.find(params[:id])
    @share_url = order.share_url
  end

  def process_order
    params.permit!
    @order = Order.find(params['id'])
    @order.update(status: 'Processing')
    BotController.send_chatfuel_msg(@order.messenger_id, "msg", "msg=Your order is now being processed.")
    redirect_to orders_url
  end

  def complete_order
    params.permit!
    @order = Order.find(params['id'])
    @order.update(status: 'Completed')
    redirect_to orders_url
  end

  def calculate_delivery_fee
    params.permit!
    order = Order.find(params['order_id'])
    customer_raw_coordinate = JSON.parse(params['coordinate'])
    order_merchants = order.order_items.collect{|x| x.variant.product.category.merchant}.uniq
  
    matrix = []
    total_delivery_fee = 0
    order_merchants.each do |om|
      distance = OrdersController.get_distance(customer_raw_coordinate['lat'].to_f, customer_raw_coordinate['lng'].to_f, om.coordinates.split(",")[0].to_f, om.coordinates.split(",")[1].to_f)
      matrix << {merchant: om.name, price: price_from_distance(distance) }
      total_delivery_fee += price_from_distance(distance)
    end
    matrix << {total_delivery_fee: total_delivery_fee }
    render json: matrix
  end

  def price_from_distance(distance)
    price = case distance
    when 0..5
      79
    when 6..9
      99
    when 10..12
      129
    when 12..100
      149
    end
    price
  end

  def self.get_distance(src_lat, src_lng, dest_lat, dest_lng)
    require 'rest-client'
    require 'json'

    distance = 0
    req = RestClient::Request.new({
        method: :post,
        url: "https://www.mapquestapi.com/directions/v2/route?key=#{ENV['MAPQUEST_KEY']}&from=#{src_lat},#{src_lng}&to=#{dest_lat},#{dest_lng}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false",
        headers: { :accept => :json, content_type: :json }
      }).execute do |response, request, result|
        case response.code
        when 400
          distance = 0
        when 200..299
          distance = JSON.parse(response.body)['route']['distance']
        else
          fail "Invalid response #{response.to_str} received."
        end
      end
    distance.to_f
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      params.require(:order).permit(:id, :driver_id, :messenger_id, :custumer_name, :contact_no, :address, :coordinates, :delivery_option, :payment_option, :reference_number, :message)
    end
end

