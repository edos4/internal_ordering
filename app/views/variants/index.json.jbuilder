json.set! :data do
  json.array! @variants do |variant|
    json.partial! 'variants/variant', variant: variant
    json.url  "
              #{link_to 'Show', variant }
              #{link_to 'Edit', edit_variant_path(variant)}
              #{link_to 'Destroy', variant, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end