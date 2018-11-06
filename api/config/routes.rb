Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources 'user', only: [:index, :create]

  get 'queue' => 'topic#queue'
  post 'complete/:id' => 'topic#complete'
end
