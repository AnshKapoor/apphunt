class ProductsController < ApplicationController

  def index
    @products = Product.all

    # Gathering categories
    @categories_array = []
    @products.each do |product|
      unless @categories_array.include?(product.category)
        @categories_array << product.category
      end
    end
    @categories = @categories_array.to_json

    return @products
  end

  def show
    @product = Product.find(params[:id])
  end

  # Searching for products
  def search
    @products = Product.search(params[:query])
    if request.xhr? # i.e. "if AJAX request"
      @products
    else
      render :index
    end
  end

  # Upvoting products
  def upvote
    @product = Product.find(params[:id])
    if current_user.voted_for? @product
      current_user.unvote_for @product
    else
      current_user.up_votes @product
    end
  end

  # Posting new comments (called from React Comment component),
  # parsing json file with jbuilder, then sent back to the component,
  # rendering real-time
  def post_comment
    @product = Product.find(params[:product_id])
    @comment = Comment.create(
      product_id: @product.id,
      content: params[:content],
      user_id: current_user.id
    )
  end

end
