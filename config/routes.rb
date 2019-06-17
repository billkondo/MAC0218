Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  # Users
  get 'api/users/get_public_profile' => 'users#get_public_profile'
  
  # Multiple Choice Problems routing
  post 'api/problems/create_multiple_choice' => 'multiple_choice_problems#create_multiple_choice' 

  post 'api/problems/update_multiple_choice' => 'multiple_choice_problems#update_multiple_choice'

  post 'api/problems/delete_multiple_choice' => 'multiple_choice_problems#delete_multiple_choice'

  get 'api/problems/current_user_multiple_choice' => 'multiple_choice_problems#current_user_multiple_choice'

  get 'api/problems' => 'multiple_choice_problems#get_problems'

  get 'api/problems/get_multiple_choice' => 'multiple_choice_problems#get_multiple_choice'

  get 'api/problems/get_multiple_choice_favorites' => 'multiple_choi  ce_problems#get_multiple_choice_favorites'

  post 'api/problems/update_multiple_choice_favorites' => 'multiple_choice_problems#update_multiple_choice_favorites'

  post 'api/problems/write/create' => 'write_problems#create'
  get  'api/problems/write/get'    => 'write_problems#get'

  # Authentication
  devise_scope :user do
    post 'api/auth/sign_up' => 'app_sign_up#create'
  end

  
  match '*path', to: 'home#index', via: :all
end
