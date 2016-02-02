require 'open-uri'

class Article < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:title, :body, :author]

  validates :title, :body, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to :author, class_name: "User"

  def self.create_from_url(url)
    doc = Nokogiri::HTML(open(url))

    #manipulate the nokogiri document to get raw html...
    title = doc.xpath("//h1//text()").to_s
    body = doc.xpath("//div[@id='bodyContent']")
    fragment = doc.xpath("//div[@id='mw-content-text']/p//text()").to_s[0..300]

    @page = Article.create!(
      title: title,
      body: body,
      fragment: fragment,
      author_id: 1
    )
  end

  def self.whats_new(n)
    @whats_new = Article.select("*").order("updated_at DESC").limit(n)

    return @whats_new
  end

end
