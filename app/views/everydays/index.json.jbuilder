json.set! :data do
  json.array! @everydays do |everyday|
    json.partial! 'everydays/everyday', everyday: everyday
    json.url  "
              #{link_to 'Show', everyday }
              #{link_to 'Edit', edit_everyday_path(everyday)}
              #{link_to 'Destroy', everyday, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end