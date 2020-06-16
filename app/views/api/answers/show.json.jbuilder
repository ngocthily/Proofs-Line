json.answer do
    json.partial! '/api/answers/answer', answer: @answer
end

json.user do
  json.partial! '/api/users/user', user: @answer.user
end

@answer.votes do |vote|
  json.votes do 
    json.set! vote.id do
      json.partial! 'api/votes/vote', vote: vote
    end
  end
end