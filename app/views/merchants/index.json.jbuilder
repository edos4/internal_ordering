json.set! :data do
  json.array! @merchants do |merchant|
    json.partial! 'merchants/merchant', merchant: merchant
    json.url  "
              #{link_to 'Show', merchant }
              #{link_to 'Edit', edit_merchant_path(merchant)}
              #{link_to 'Destroy', merchant, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end