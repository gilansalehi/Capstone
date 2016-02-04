Rails.application.routes.draw do

  root to: "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  get "auth/facebook/callback", to: "sessions#omniauth_facebook"

  namespace :api, defaults: { format: :json } do
    resources :articles, only: [:index, :new, :create, :show, :update]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resource :fetcher, only: [:create]
    post "fetcher/header", to: "fetchers#header"
    get "search", to: "utils#search"
  end

  get "*path", to: "application#rescue"
end
