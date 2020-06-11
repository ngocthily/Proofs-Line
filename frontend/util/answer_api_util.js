export const createAnswer = (answer) => (
    $.ajax({
        url: 'api/answers',
        method: 'POST',
        data: { answer }
    })
);

export const fetchAnswers = (questionId) => (
    $.ajax({
        url: `api/questions/${questionId}/answers`,
        method: 'GET'
    })
);