json.extract! question, :id, :title, :body, :author_id, :created_at
json.votes question.votes
json.secs Time.now - question.created_at
json.author question.author.username

if current_user
    json.voted_by_current_user !!question.votes.find_by(user_id: current_user.id, post_type: "question") 
end
