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
    # render(template: '../views/products/index.json.jbuilder', locals: {products: @products.to_json})
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
      @products
      # render :json => @products.to_json
      # render(template: '../views/products/index.json.jbuilder', :json => @products)
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
