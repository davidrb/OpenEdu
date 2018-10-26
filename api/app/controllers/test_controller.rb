class TestController < ApplicationController
  def create
    render json: params["message"]
  end
end
