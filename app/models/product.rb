class Product < ApplicationRecord
  belongs_to :user
  has_many :comments
  acts_as_votable

  searchkick

  # Search bar config
  # include PgSearch
  # Search for products for sale
  # pg_search_scope :product_search, against: [ :name, :tagline, :url, :category ],
  # using: {tsearch: {prefix: true, any_word: true}}

end
