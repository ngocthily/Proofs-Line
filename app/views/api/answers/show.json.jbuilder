json.answer do
    json.partial! '/api/answers/answer', answer: @answer
end

json.user do
  json.partial! '/api/users/user', user: @answer.user
end