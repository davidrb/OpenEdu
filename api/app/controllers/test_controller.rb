class TestController < ActionController::API
  def show
    render json: { :hello => "world" }
  end
end
