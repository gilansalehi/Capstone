require 'open-uri'

class Api::FetchersController < ApplicationController

  def create
    doc = Nokogiri::HTML(open(params[:url]))

    #manipulate the nokogiri document to get raw html...
    title = doc.xpath("//h1//text()").to_s
    body = doc.xpath("//div[@id='bodyContent']")
    fragment = doc.xpath("//div[@id='mw-content-text']/p//text()").to_s[0..300]
    contents = doc.xpath("//div[@id='toc']//li//a").map{ |link| link.to_s }
    # contents = doc.xpath("//div[@id='toc']//li").map{ |node| node.inner_html }
    # test1 = doc.xpath("//div[@id='toc']//li/a").map{ |node| node.text }
    # test2 = doc.xpath("//div[@id='toc']//li/a").map{ |link| link["href"] }

    @page = Article.new(
      title: title,
      body: body,
      fragment: fragment,
      table_of_contents: contents,
      author_id: 1
    )

    if @page.save
      render :show
    else
      render json: @page.errors.full_message, status: 422
    end
  end

  def header
    img = Nokogiri::HTML(open(params[:url]))

    img_url = img.xpath("//a")[32]
    @target_url = img_url["href"]

    render :image
  end

  def rescue
    debugger

  end

end
