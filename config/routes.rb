Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :bookings, except: [:create]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index]
    resources :sitters, only: [:create, :show, :index] do
      resources :bookings, only: :create
    end
  end
end
