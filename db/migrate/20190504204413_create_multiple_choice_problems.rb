class CreateMultipleChoiceProblems < ActiveRecord::Migration[5.2]
  def change
    create_table :multiple_choice_problems do |t|
      t.string :title
      t.string :statement
      t.references :user

      t.timestamps
    end
  end
end
