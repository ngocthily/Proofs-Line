export const selectQuestion = ({ questions }, questionId) => {
    return questions[questionId] || {};
};