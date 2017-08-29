class ProductsController < ApplicationController
  def index
    @products = Product.all

    # Try to return products search results as an array instead of rendering them to the browser
    # Pseudo code: @products = Product.search(params[:query]).template(''../views/products/index.json.jbuilder'').to_a

    # @users = User.all
    # @users_json = render_to_string( template: 'users.json.jbuilder', locals: { users: @users})
  end

  def show
    @product = Product.find(params[:id])
  end

  def upvote
    @product = Product.find(params[:id])
    if current_user.voted_for? @product
      current_user.unvote_for @product
    else
      current_user.up_votes @product
    end
  end


  def search
    @products = Product.search(params[:query])
    if request.xhr? # i.e. "if AJAX request"
      render @products
      # render :json => @products.to_json
      # render(template: '../views/products/index.json.jbuilder')
    else
      render :index
    end
  end


  def for_sale
    # For search function for products that are for sale
    # if params.has_key?(:search_value) and params[:search_value] != ""
    #   @products = Product.where(for_sale: true).product_search(params[:search_value])
    # else
    #  @products = Product.where(for_sale: true)
    # end

    # For sorted array of product categories for products that are for sale
    @categories = []
    @products.each do |product|
      unless @categories.include?(product.category)
        @categories << product.category
      end
    end
    @categories = @categories.sort_by { |word| word.downcase }
  end

  def wanted
    @products = Product.where(for_sale: false)
  end

end
