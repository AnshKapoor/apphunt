Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'

  resources :products do
    member do
      post :upvote  # /products/:id/upvote
    end
  end

  get 'for_sale', to: 'products#for_sale'
  get 'wanted', to: 'products#wanted'

  get '/search' => 'products#search' do
    member do
      post :upvote  # /products/:id/upvote
    end
  end


  # get 'for-sale', to: 'products#for-sale' do
  #   member do
  #     post :upvote # /for-sale/:id/upvote
  #   end
  # end

  # get 'wanted', to: 'products#wanted' do
  #   member do
  #     post :upvote # /wanted/:id/upvote
  #   end
  # end
end
