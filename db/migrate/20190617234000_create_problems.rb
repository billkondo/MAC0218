class CreateProblems < ActiveRecord::Migration[5.2]
  def change
    create_table :problems, id: :uuid do |t|
      t.references :multiple_choice_problem, foreign_key: true, type: :uuid
      t.references :write_problem, foreign_key: true, type: :uuid
      t.timestamps
    end
  end
end
