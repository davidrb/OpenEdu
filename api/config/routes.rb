Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  get 'secret', to: 'test#index'
end
