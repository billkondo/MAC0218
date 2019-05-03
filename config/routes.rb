Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "home#index"

  # Problems routing
  post 'api/problems/create_multiple_choice' => "problems#create_multiple_choice"

  match '*path', to: 'home#index', via: :all
end
