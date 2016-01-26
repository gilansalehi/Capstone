class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    if params[:user][:password] != params[:user][:password_confirm]
      flash.now[:errors] = ["Password must match password confirmation"]
      render :new
      return
    end

    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    # @user = User.new(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
