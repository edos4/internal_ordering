json.set! :data do
  json.array! @drivers do |driver|
    json.partial! 'drivers/driver', driver: driver
    json.url  "
              #{link_to 'Show', driver }
              #{link_to 'Edit', edit_driver_path(driver)}
              #{link_to 'Destroy', driver, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end