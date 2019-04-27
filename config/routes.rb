Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "problems" => "problems#index"

  root "home#index"

  match '*path', to: 'home#index', via: :all
end
