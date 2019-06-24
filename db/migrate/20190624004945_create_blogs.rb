class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs, id: :uuid do |t|
      t.string :title
      t.string :sub_title
      t.string :body
      t.references :group, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
