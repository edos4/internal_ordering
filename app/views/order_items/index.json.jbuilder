json.set! :data do
  json.array! @order_items do |order_item|
    json.partial! 'order_items/order_item', order_item: order_item
    json.url  "
              #{link_to 'Show', order_item }
              #{link_to 'Edit', edit_order_item_path(order_item)}
              #{link_to 'Destroy', order_item, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end