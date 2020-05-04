export const fetchQuestions = () => (
    $.ajax({
        url: '/api/questions',
        method: 'GET'
    })
);

// export const fetchQuestion = () => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/questions/question.${id}`
//     })
// );