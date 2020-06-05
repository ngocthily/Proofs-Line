@questions.each do |question|
    json.set! question.id do
        json.extract! question, :id, :title, :body, :author_id, :created_at
        json.author question.author.username
        json.answers question.answers do |answer|
            json.set! answer.id do
                json.extract! answer, :id, :body, :user_id, :question_id, :created_at, :votes
                json.user answer.user.username
            end
        end
    end
end
