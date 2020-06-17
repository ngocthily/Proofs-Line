json.question do
    json.partial! '/api/questions/question', question: @question
    json.answerIds @question.answers.pluck(:id)
end

@question.answers.includes(:user).each do |answer|
  json.answers do
    json.set! answer.id do
      json.partial! 'api/answers/answer', answer: answer
    end
  end

  json.users do
    json.set! answer.user.id do
      json.extract! answer.user, :id, :username
    end
  end
end




