class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :product

  def time_stamp_formatted
    created_at.strftime("%Y-%m-%d %H:%M")
  end

end
