export const selectQuestion = ({ questions }, questionId) => {
    return questions[questionId] || {};
};

export const selectAnswersForQuestion = ({ questions, answers }, question) => {
    return question.answerIds.map(answerId => answers[answerId]);
};