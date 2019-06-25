class CreateWriteFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :write_favorites, id: :uuid do |t|
      t.references :user, foreign_key: true, type: :uuid
      t.references :write_problem, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
