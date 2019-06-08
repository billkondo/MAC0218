class CreateWriteProblemQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :write_problem_questions, id: :uuid do |t|
      t.string :question
      t.references :write_problem, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
