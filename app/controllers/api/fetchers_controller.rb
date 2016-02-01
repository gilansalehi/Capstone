require 'open-uri'

class Api::FetchersController < ApplicationController

  def create
    doc = Nokogiri::HTML(open(params[:url]))

    debugger
    #manipulate the nokogiri document to get raw html...
    title = doc.xpath("//h1//text()").to_s
    body = doc.xpath("//div[@id='bodyContent']")
    fragment = doc.xpath("//div[@id='mw-content-text']/p//text()").to_s

    @page = Article.new(
      title: title,
      body: body,
      author_id: 1
    )

    if @page.save
      render :show
    else
      render json: @page.errors.full_message, status: 422
    end
  end
end
