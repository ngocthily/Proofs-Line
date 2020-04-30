import { getQuestions } from '../util/questions_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

const receiveAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

// const receiveQuestion = (question) => ({
//     type: RECEIVE_QUESTION,
//     question
// });

export const fetchQuestions = () => dispatch => (
    getQuestions().
        then(() => dispatch(receiveAllQuestions()))
);
