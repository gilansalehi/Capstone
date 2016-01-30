require 'open-uri'

class Api::FetchersController < ApplicationController

  def create
    doc = Nokogiri::HTML(open(params[:url]))

    @page = Article.new(
      title: params[:url],
      body: doc,
      author_id: 1
    )

    @page.save
    
    render :show

    # if @page.save
    #   render :show
    # else
    #   render json: @page.errors.full_message, status: 422
    # end
  end
end
