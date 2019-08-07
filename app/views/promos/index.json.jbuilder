json.set! :data do
  json.array! @promos do |promo|
    json.partial! 'promos/promo', promo: promo
    json.url  "
              #{link_to 'Show', promo }
              #{link_to 'Edit', edit_promo_path(promo)}
              #{link_to 'Destroy', promo, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end