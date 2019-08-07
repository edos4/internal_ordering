json.set! :data do
  json.array! @settings do |setting|
    json.partial! 'settings/setting', setting: setting
    json.url  "
              #{link_to 'Show', setting }
              #{link_to 'Edit', edit_setting_path(setting)}
              #{link_to 'Destroy', setting, method: :delete, data: { confirm: 'Are you sure?' }}
              "
  end
end