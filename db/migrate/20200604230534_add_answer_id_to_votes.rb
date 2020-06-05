class AddAnswerIdToVotes < ActiveRecord::Migration[5.2]
  def change
    add_column :votes, :answer_id, :integer
  end
end
