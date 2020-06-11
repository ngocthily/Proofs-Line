export const fetchQuestions = data => (
    $.ajax({
        url: 'api/questions',
        method: 'GET',
        data
    })
);

export const fetchQuestion = (questionId) => (
    $.ajax({
        url: `api/questions/${questionId}`,
        method: 'GET'
    })
);

export const createQuestion = (question) => (
    $.ajax({
        url: 'api/questions',
        method: 'POST',
        data: { question }
    })
);

export const updateQuestion = (question) => (
    $.ajax({
        url: `api/questions/${question.id}`,
        method: 'PATCH',
        data: { question }
    })
);

export const deleteQuestion = (questionId) => (
    $.ajax({
        url: `api/questions/${questionId}`,
        method: 'DELETE'
    })
)
