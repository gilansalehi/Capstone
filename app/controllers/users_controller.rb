class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    # if param s[:user][:password] != params[:user][:password_confirm]
    #   flash.now[:errors] = ["Password must match password confirmation"]
    #   render :new
    #   return
    # end # TODO this in react auth once we learn that.

    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      render :index
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
