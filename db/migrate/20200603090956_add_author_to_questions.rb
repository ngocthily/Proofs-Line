class AddAuthorToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :author, :string
  end
end
