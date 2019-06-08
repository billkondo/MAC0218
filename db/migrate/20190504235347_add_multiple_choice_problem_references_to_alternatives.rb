class AddMultipleChoiceProblemReferencesToAlternatives < ActiveRecord::Migration[5.2]
  def change
    add_reference :alternatives, :multiple_choice_problem, foreign_key: true, type: :uuid
  end
end
