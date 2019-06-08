class CreateMultipleChoiceFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :multiple_choice_favorites, id: :uuid do |t|
      t.references :user, foreign_key: true, type: :uuid
      t.references :multiple_choice_problem, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
