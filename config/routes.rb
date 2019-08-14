Rails.application.routes.draw do
  resources :everydays
  resources :drivers
  resources :settings
  resources :promos
  resources :order_items
  resources :orders
  resources :variants
  resources :products
  resources :merchants
  resources :categories

  resources :store, only: [] do
    collection do
      get :index
      get :checkout 
      get :completed 
      patch :pending
    end
  end

  get 'store/menu/:id' => 'store#menu', :as => :merchant_proucts
  get 'store/:id/cart' => 'store#cart', :as => :product_variants
  get 'store/view_cart' => 'store#view_cart', :as => :view_cart
  get '/orders/track_order/:id' => 'orders#track_order', :as => :track_order
  resources :carts, only: [] do
    collection do
      post :add 
    end
  end

  devise_for :users

  get '/dashboard' => 'admins#index'

  get 'categories/new/:id' => 'categories#new', :as => :new_merchant_category
  get 'products/new/:id' => 'products#new', :as => :new_category_product
  get 'variants/new/:id' => 'variants#new', :as => :new_product_variant
  
  root 'categories#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


