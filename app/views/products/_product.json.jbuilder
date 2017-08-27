# Will build the JSON file for all the product_item components
json.extract! product, :name, :tagline, :url, :id, :image_url, :description, :for_sale

json.user do
  json.extract! product.user, :avatar_url
  # json.extract! product, :image_url
end

json.up_votes product.votes_for.count

if user_signed_in?
  json.up_voted current_user.voted_for? product
end
