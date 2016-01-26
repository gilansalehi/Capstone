class Api::ArticlesController < ApplicationController

  def index
    @whats_new = Article.whats_new
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def show
    @article = Article.find_by_id(params[:id])
  end

  def update
    @article = Article.find_by_id(params[:id])

    if @article.update
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :body, :author_id)
  end

end
