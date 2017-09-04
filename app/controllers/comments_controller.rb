class CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render json: @comments
  end

  # def create
  #   @comment = Comment.new(user_id: params[:user.id], product_id: params[:product.id] content: params[:content])
  #   if @comment.save
  #     @comments = Comment.order('id desc')
  #     render json: @comments
  #   else
  #     render nothing: true, status: :bad_request
  #   end
  # end
end
