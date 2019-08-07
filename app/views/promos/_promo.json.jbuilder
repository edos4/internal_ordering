json.extract! promo, :id, :image, :desc, :url, :created_at, :updated_at
json.url promo_url(promo, format: :json)
