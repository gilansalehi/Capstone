class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  protected
  def user_params
    self.params.require(:user).permit(:username, :password, :password_confirm)
  end
end
