class TestController < SecuredController
  def index
    render json: { username: current_user.username }
  end
end
