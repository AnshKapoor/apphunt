class Product < ApplicationRecord
  searchkick text_start: ['name'], text_start: ['tagline'], text_start: ['url'], text_start: ['category']

  belongs_to :user
  has_many :comments
  acts_as_votable

  # Search bar config
  # include PgSearch
  # Search for products for sale
  # pg_search_scope :product_search, against: [ :name, :tagline, :url, :category ],
  # using: {tsearch: {prefix: true, any_word: true}}

end
