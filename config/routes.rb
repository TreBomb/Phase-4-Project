Rails.application.routes.draw do
  
  resources :products, only: [:index, :show, :create, :destroy]
  resources :brands, only: [:index, :show, :create, :destroy]
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
