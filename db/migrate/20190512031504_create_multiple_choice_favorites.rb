class CreateMultipleChoiceFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :multiple_choice_favorites do |t|
      t.references :user, foreign_key: true
      t.references :multiple_choice_problem, foreign_key: true

      t.timestamps
    end
  end
end
