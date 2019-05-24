Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  # Problems routing
  post 'api/problems/create_multiple_choice' => 'problems#create_multiple_choice' 

  post 'api/problems/update_multiple_choice' => 'problems#update_multiple_choice'

  post 'api/problems/delete_multiple_choice' => 'problems#delete_multiple_choice'

  get 'api/problems/current_user_multiple_choice' => 'problems#current_user_multiple_choice'

  get 'api/problems' => 'problems#get_problems'

  get 'api/problems/get_multiple_choice' => 'problems#get_multiple_choice'

  get 'api/problems/get_multiple_choice_favorites' => 'problems#get_multiple_choice_favorites'

  post 'api/problems/update_multiple_choice_favorites' => 'problems#update_multiple_choice_favorites'
  
  match '*path', to: 'home#index', via: :all
end
