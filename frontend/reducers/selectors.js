export const selectQuestion = ({ questions }, questionId) => {
    return questions[questionId] || { answerIds: [] };
};

export const selectAnswersForQuestion = ({ answers }, question) => {
    return question.answerIds.map(answerId => answers[answerId]);
};