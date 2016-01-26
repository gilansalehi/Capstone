class ArticlesController < ApplicationController

  def index
  end

  def new
  end

  def create
  end

  def show
  end

  def update
  end

  private
  def article_params
    params.require(:article).permit(:title, :body, :author_id)
  end

end
