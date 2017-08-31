# Constructing the json objects for products being called through comments#index
json.comments do
  json.array! @comment do |comment|
    json.partial! "comments/comment", comment: comment
  end
end
