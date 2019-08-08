Rails.application.routes.draw do
  resources :drivers
  resources :settings
  resources :promos
  resources :order_items
  resources :orders
  resources :variants
  resources :products
  resources :merchants
  resources :categories
  resources :store

  devise_for :users

  get '/dashboard' => 'admins#index'

  root 'categories#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
