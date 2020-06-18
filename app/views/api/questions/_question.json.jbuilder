json.extract! question, :id, :title, :body, :author_id, :created_at
json.votes question.votes

if current_user
    json.voted_by_current_user !!question.votes.find_by(user_id: current_user.id, post_type: "question") 
end