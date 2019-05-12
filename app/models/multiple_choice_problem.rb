class MultipleChoiceProblem < ApplicationRecord
  belongs_to :user
  has_many :alternatives, dependent: :destroy

  accepts_nested_attributes_for :alternatives, allow_destroy: true 
end
