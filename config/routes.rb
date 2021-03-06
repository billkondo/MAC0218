Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  # Users
  get 'api/users/get_public_profile' => 'users#get_public_profile'
  
  # Multiple choice problems routing
  post 'api/problems/create_multiple_choice' => 'multiple_choice_problems#create_multiple_choice' 

  post 'api/problems/update_multiple_choice' => 'multiple_choice_problems#update_multiple_choice'

  post 'api/problems/delete_multiple_choice' => 'multiple_choice_problems#delete_multiple_choice'

  get 'api/problems/current_user_multiple_choice' => 'multiple_choice_problems#current_user_multiple_choice'

  get 'api/problems' => 'multiple_choice_problems#get_problems'

  get 'api/problems/get_multiple_choice' => 'multiple_choice_problems#get_multiple_choice'

  get 'api/problems/get_multiple_choice_favorites' => 'multiple_choice_problems#get_multiple_choice_favorites'

  post 'api/problems/update_multiple_choice_favorites' => 'multiple_choice_problems#update_multiple_choice_favorites'

  # Write problems routing
  post 'api/problems/write/create'          => 'write_problems#create'
  get  'api/problems/write/get'             => 'write_problems#get'
  post 'api/problems/write/update_favorite' => 'write_problems#update_favorite'

  # Problems routing
  get 'api/problems/get_all'           => 'problems#get_all'
  get 'api/problems/get_user_problems' => 'problems#get_user_problems'

  # Mock routing
  post 'api/mocks/create' => 'mock#create'
  get 'api/mocks/delete_mock' => 'mock#delete_mock'
  get 'api/mocks/update_mock' => 'mock#update_mock'
  get 'api/mocks/get_mock'    => 'mock#get_mock'
  get 'api/mocks/get_problems_list' => 'mock#get_problems_list'
  get 'api/mocks/get_all_mocks' => 'mock#get_all_mocks'

  # Groups routing
  post 'api/groups/create' => 'groups#create'
  get  'api/groups/current_user_groups' => 'groups#current_user_groups'
  get  'api/groups/read' => 'groups#read'

  # Blog routing
  post 'api/groups/blog/create'  => 'blogs#create'
  get  'api/groups/blog/get_all' => 'blogs#get_all'
  get  'api/groups/blog/read'    => 'blogs#read' 

  # Authentication
  devise_scope :user do
    post 'api/auth/sign_up' => 'app_sign_up#create'
  end
  
  match '*path', to: 'home#index', via: :all
end
