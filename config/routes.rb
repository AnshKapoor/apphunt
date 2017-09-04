Rails.application.routes.draw do

  devise_for :users

  root to: 'pages#home'

  resources :products do
    member do
      post :upvote  # /products/:id/upvote
      post :post_comment # /products/:id/post_comment
    end
  end

  get 'comments', to: 'comments#index'
  # get 'post_comment', to: 'comments#create'

  # get 'for_sale', to: 'products#for_sale'
  # get 'wanted', to: 'products#wanted'

  get '/search' => 'products#search' do
    member do
      post :upvote  # /products/:id/upvote
      post :post_comment # /products/:id/post_comment
    end
  end

end
