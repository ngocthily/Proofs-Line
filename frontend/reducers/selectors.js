export const selectQuestion = ({ questions }, questionId) => {
    return questions[questionId] || {};
};


// haven't
// export const selectAnswersForQuestion = ({ questions, answers }, question) => {
//     return question.answerIds.map(answerId => answers[answerId]);
// };