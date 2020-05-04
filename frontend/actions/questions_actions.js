import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
// export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

export const receiveAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

// export const receiveQuestion = (question) => ({
//     type: RECEIVE_QUESTION,
//     question
// });

export const fetchQuestions = () => dispatch => (
    QuestionAPIUtil.fetchQuestions()
        .then((questions) => dispatch(receiveAllQuestions(questions)))
);

// export const fetchQuestion = () => dispatch => (
//     QuestionAPIUtil.fetchQuestion()
//         .then((question) => dispatch(receiveQuestion(question)))
// );
