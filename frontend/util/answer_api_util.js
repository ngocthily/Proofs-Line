export const createAnswer = (answer) => (
    $.ajax({
        url: 'api/answers',
        method: 'POST',
        data: { answer }
    })
);

export const fetchAnswers = () => (
    $.ajax({
        url: 'api/answers',
        method: 'GET'
    })
);

export const fetchAnswer = (answerId) => (
    $.ajax({
        url: `api/answers/${answerId}`,
        method: 'GET'
    })
)