Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do

    resources :enrollments, only: [:create, :update, :destroy]

    resources :attendances
    
    resources :users, only: [:index, :update]
    get 'user_courses', to: 'courses#user_courses'
    
    resources :unit_contents, only: [:index, :create, :destroy]
    delete '/unit/:unit_id/contents/:content_id/unit_content', to: '/api/unit_contents#delete_by_unit_and_content'

    resources :unit_assignments, only: [:index, :create, :destroy]
    delete '/unit/:unit_id/assignments/:assignment_id/unit_assignment', to: '/api/unit_assignments#delete_by_unit_and_assignment'

    resources :unit_quizzes, only: [:index, :create, :destroy]
    delete '/unit/:unit_id/quizzes/:quiz_id/unit_quiz', to: '/api/unit_quizzes#delete_by_unit_and_quiz'
    
    resources :courses do
      resources :sections
    end
    
    resources :sections, only: [] do
      resources :units
    end
    
    resources :units, only: [] do
      resources :contents, only: [:index]
      resources :assignments, only: [:index]
      resources :quizzes, only: [:index]
    end
    
    get 'get_attendances', to: '/api/attendances#get_attendances'

    resources :contents, only: [:show, :create, :update, :destroy]
    resources :assignments, only: [:show, :create, :update, :destroy]
    resources :quizzes, only: [:show, :create, :update, :destroy]

    post 'contents/search', to: '/api/contents#search_contents'
    post 'contents/search/:unit_id', to: '/api/contents#search_contents_not_in_unit'
    post 'assignments/search', to: '/api/assignments#search_assignments'
    post 'assignments/search/:unit_id', to: '/api/assignments#search_assignments_not_in_unit'
    post 'quizzes/search', to: '/api/quizzes#search_quizzes'
    post 'quizzes/search/:unit_id', to: '/api/quizzes#search_quizzes_not_in_unit'
  end
end
