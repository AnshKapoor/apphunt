class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  # Adding the same functionality here as in products controller to enable product components also at home page
  def home
    @products = Product.all
  end

  def upvote
    @product = Product.find(params[:id])
    if current_user.voted_for? @product
      current_user.unvote_for @product
    else
      current_user.up_votes @product
    end
  end
end
