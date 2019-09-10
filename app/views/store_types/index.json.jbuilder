json.set! :data do
  json.array! @store_types do |store_type|
    json.partial! 'store_types/store_type', store_type: store_type
    json.url  "
              #{link_to 'Show', store_type }
              #{link_to 'Edit', edit_store_type_path(store_type)}
              #{link_to 'Destroy', store_type, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end