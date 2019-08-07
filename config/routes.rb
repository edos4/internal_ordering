Rails.application.routes.draw do
  resources :merchants
  resources :categories

  devise_for :users

  root 'categories#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
