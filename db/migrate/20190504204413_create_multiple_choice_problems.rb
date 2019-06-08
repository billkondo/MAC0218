class CreateMultipleChoiceProblems < ActiveRecord::Migration[5.2]
  def change
    create_table :multiple_choice_problems, id: :uuid do |t|
      t.string :title
      t.string :statement
      t.references :user, type: :uuid

      t.timestamps
    end
  end 
end
