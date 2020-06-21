json.extract! answer, :id, :body, :user_id, :question_id, :created_at
json.votes answer.votes
json.secs Time.now - answer.created_at

if current_user 
    json.voted_by_current_user !!answer.votes.find_by(user_id: current_user.id)
end