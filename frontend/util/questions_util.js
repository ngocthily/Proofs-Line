export const getQuestions = () => (
    $.ajax({
        url: '/api/questions'
    })
);
