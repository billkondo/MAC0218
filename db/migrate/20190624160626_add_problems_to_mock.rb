class AddProblemsToMock < ActiveRecord::Migration[5.2]
  def change
    add_column :mocks, :problems, :text, array: true, default: []
  end
end
