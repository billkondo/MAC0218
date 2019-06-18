class UsersController < ApplicationController
  def get_public_profile
    username = current_user.username
    render json: { status: "OK", username: username }
  end
end
