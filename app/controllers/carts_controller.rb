class CartsController < ApplicationController
  #before_action :set_category, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # Creates an Order if messenger_id does not have an Order with "Open" status
  # Attaches an order_item to an Order if Order has "Open" status
  # Order Items per order are unique
  def add
    params.permit!
    messenger_id = params['messenger_id']
    variant_id = params['variant_id']
    quantity = params['quantity']

    order = Order.find_or_create_by!(messenger_id: messenger_id, status: "Open")
    order.order_items.where(variant_id: variant_id).destroy_all
    order.order_items.create(variant_id: variant_id, quantity: quantity)
  end

end
