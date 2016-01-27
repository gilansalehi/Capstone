class Article < ActiveRecord::Base

  validates :title, :body, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to (
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  def self.whats_new
    
  end

end
