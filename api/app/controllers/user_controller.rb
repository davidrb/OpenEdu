class UserController < ApplicationController
  before_action :authenticate_user, only: [:index]

  def index
    render json: { username: current_user.username }
  end

  def create
    render json: "unimplemented"
  end
end
