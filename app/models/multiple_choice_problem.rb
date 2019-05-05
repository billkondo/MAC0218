class MultipleChoiceProblem < ApplicationRecord
  belongs_to :user
  has_many :alternatives

  accepts_nested_attributes_for :alternatives, allow_destroy: true 
end
