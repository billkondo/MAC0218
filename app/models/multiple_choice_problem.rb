class MultipleChoiceProblem < ApplicationRecord
  belongs_to :user
  has_many :alternatives, dependent: :destroy
  has_many :multiple_choice_favorites, dependent: :destroy

  accepts_nested_attributes_for :alternatives, allow_destroy: true

  validates :title, presence: true
  validates :statement, presence: true 
  validates :correct_answer, presence: true

  validates :alternatives, length: { minimum: 2 }
end
