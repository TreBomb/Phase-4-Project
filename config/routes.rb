Rails.application.routes.draw do
  
  resources :products, only: [:index, :show, :create, :destroy, :update]
  resources :brands, only: [:index, :show, :create, :destroy]
  resources :users, only: [:show, :create]

  get "/set_favorite/:id", to: "sessions#set_favorite"
  get "/clear_favorites", to: "sessions#clear_favorites"


  post "/login", to: "sessions#create"
  get "/user", to: "sessions#show"

  post "/signup", to: "users#create"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
