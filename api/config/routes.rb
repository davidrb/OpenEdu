Rails.application.routes.draw do
  get '/api', to: 'test#show'
end
