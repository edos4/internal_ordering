Rails.application.routes.draw do
  get 'admins/index'
  get 'summary_reports/index'
  get 'admins/new_user'
  post 'admins/create_user'
  get 'admins/:id/edit_user' => 'admins#edit_user', :as => :admin_edit_user
  match 'admins/:id' => 'admins#destroy_user', :via => :delete, :as => :admin_destroy_user
  patch 'admins/:id', to: 'admins#update_user'
  get '/summary_reports' => 'summary_reports#index', :as => :summary_reports
  get '/record_deposits' => 'record_deposits#index', :as => :record_deposits
  post '/record_deposit' => 'record_deposits#record_deposit', :as => :record_deposit

  devise_for :users
  resources :payment_histories
  resources :ar_accounts
  resources :aging_reports
  resources :bank_accounts
  resources :amortizations do
    collection do
      get 'compute_monthly_amort'
      get 'check_downpayment'
    end
  end

  resources :summary_collections

  resources :subsidiary_ledgers
  resources :amortizations do
    collection do
      post 'process_pay'
    end
  end 
  resources :customer_payments do
    collection do
      get 'pay'
      post 'process_pay'
    end
  end

  root 'amortizations#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
