@questions.each do |question|
    json.set! question.id do
        json.partial! 'question', question: question
        json.answerIds []
        json.countOfAnswers question.answers.count
        json.author question.author.username
    end
end
