class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.string :vote_type, null: false #upvote and downvote
      t.string :post_type, null: false #answers and questions
      t.integer :post_id, null: false
      t.timestamps
    end
    add_index :votes, :post_type
    add_index :votes, :post_id
  end
end
