# Adding comment data to the JSON product object
json.comment do
  json.extract! comment, :id, :content, :time_stamp_formatted
  json.extract! comment.user, :avatar_url, :first_name
end
