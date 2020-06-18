class AddQuestionIdToVotes < ActiveRecord::Migration[5.2]
  def change
    add_column :votes, :question_id, :integer
  end
end
