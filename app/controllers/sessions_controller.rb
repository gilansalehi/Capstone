class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    sign_out!
    redirect_to root_url
  end

  def omniauth_facebook
    @user = User.find_or_create_by_auth_hash(auth_hash)
    sign_in!(@user)
    redirect_to root_url + '#/'
  end

  private
    def auth_hash
      request.env['omniauth.auth']
    end

end
