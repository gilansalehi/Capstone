class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      render "api/articles/index"
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: ["Error with create user"]
    end
  end

  protected
  def user_params
    self.params.require(:user).permit(:username, :password)
  end
end
