Rails.application.routes.draw do
  resources :users
  resources :meals do
    resources :reviews, only: [:show, :index]
  end
  resources :reviews

  # Session
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Review
  get "/reviews/:id/user", to: "reviews#user"
  
  
  # Meal
  get "/meals/sort", to: "meals#sort"
 
  # User
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
