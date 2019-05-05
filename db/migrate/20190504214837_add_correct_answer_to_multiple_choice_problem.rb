class AddCorrectAnswerToMultipleChoiceProblem < ActiveRecord::Migration[5.2]
  def change
    add_column :multiple_choice_problems, :correct_answer, :string
  end
end
