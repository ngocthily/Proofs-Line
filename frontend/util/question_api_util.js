export const fetchQuestions = () => (
    $.ajax({
        url: 'api/questions',
        method: 'GET'
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