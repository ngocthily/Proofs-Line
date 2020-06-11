@questions.each do |question|
    json.set! question.id do
        json.partial! 'question', question: question
        json.answerIds []
    end
end
