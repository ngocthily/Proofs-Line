json.extract! @question, :id, :title, :body, :author_id, :created_at
json.answers @question.answers do |answer|
    json.(answer, :id, :body, :user_id, :question_id, :created_at, :votes)
    json.user answer.user.username
end