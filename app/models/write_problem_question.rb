class WriteProblemQuestion < ApplicationRecord
  belongs_to :write_problem
  has_many :mock, dependent: :destroy
end
