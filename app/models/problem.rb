class Problem < ApplicationRecord
  has_one :multiple_choice_problem, dependent: :destroy
  has_one :write_problem, dependent: :destroy
end
