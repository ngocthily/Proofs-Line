json.extract! answer, :id, :body, :user_id, :question_id, :created_at
json.votes answer.votes
json.voted_by_current_user !!answer.votes.find_by(user_id: current_user.id)