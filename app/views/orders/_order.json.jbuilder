json.extract! order, :id, :messenger_id, :custumer_name, :contact_no, :address, :coordinates, :delivery_option, :payment_option, :reference_number, :message, :created_at, :updated_at
json.url order_url(order, format: :json)
