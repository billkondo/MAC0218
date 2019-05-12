class MultipleChoiceFavorite < ApplicationRecord
  belongs_to :user
  belongs_to :multiple_choice_problem
end
