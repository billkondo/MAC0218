class Mock < ApplicationRecord
    belongs_to :user
    has_many :multiple_choice_problem, dependent: :destroy
    has_many :write_problem_question, dependent: :destroy

    validates :name, presence: true
    validates :multiple_choice_problem, length: {minimum: 1}
    validates :write_problem_question, length: {minimum: 1}
end


