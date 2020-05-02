export const fetchQuestions = () => (
    $.ajax({
        method: 'GET',
        url: '/api/questions'
    })
);

export const fetchQuestion = () => (
    $.ajax({
        method: 'GET',
        url: `/api/questions/${id}`
    })
);