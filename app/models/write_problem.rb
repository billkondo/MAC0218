class WriteProblem < ApplicationRecord
  belongs_to :user
  has_many :write_problem_questions, dependent: :destroy

  accepts_nested_attributes_for :write_problem_questions, allow_destroy: true

  validates :title, presence: true
  validates :statement, presence: true
  # validates :write_problem_questions, length: { minimum: 1 }
end
