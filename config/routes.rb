Rails.application.routes.draw do
  devise_for :users
  # root to: 'pages#home'
  root to: 'products#index'

  resources :products, only: [] do
    member do
      post :upvote  # /products/:id/upvote
    end
  end
end
