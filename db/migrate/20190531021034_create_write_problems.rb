class CreateWriteProblems < ActiveRecord::Migration[5.2]
  def change
    create_table :write_problems, id: :uuid do |t|
      t.string :title
      t.string :statement
      t.references :user, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
