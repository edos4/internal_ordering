json.extract! order_item, :id, :variant_id, :quantity, :cancel_option, :order_id, :created_at, :updated_at
json.url order_item_url(order_item, format: :json)
