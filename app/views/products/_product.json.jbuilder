# Will build the JSON file for all the product_item components
json.extract! product, :id, :name, :tagline, :url, :image_url, :description, :for_sale, :category

# Adding user avatar photo to the JSON product object
json.user do
  json.extract! product.user, :avatar_url
end

# Adding number of upvotes to the JSON product object
json.up_votes product.votes_for.count

# Adding boolean true/false if product has been upvoted by current user
if user_signed_in?
  json.up_voted current_user.voted_for? product
end

# Adding comment data to the JSON product object
json.comments do
  json.array! product.comments do |comment|
    json.extract! comment, :id, :content, :time_stamp_formatted
    json.extract! comment.user, :avatar_url, :first_name
  end
end
