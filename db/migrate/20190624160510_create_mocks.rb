class CreateMocks < ActiveRecord::Migration[5.2]
  def change
    create_table :mocks, id: :uuid do |t|
      t.string :title
      t.string :description
      t.references :user, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
