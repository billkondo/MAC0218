class WriteFavorite < ApplicationRecord
  belongs_to :user
  belongs_to :write_problem
end
