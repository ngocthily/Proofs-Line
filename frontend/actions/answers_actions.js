import * as AnswerAPIUtil from '../util/answer_api_util';

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';
export const CLEAR_ANSWER_ERRORS = 'CLEAR_ANSWER_ERRORS';

export const receiveAnswer = ( {answer, user} ) => ({
    type: RECEIVE_ANSWER,
    answer,
    user
});

export const receiveAnswers = (answers) => ({
    type: RECEIVE_ANSWERS,
    answers
});

export const receiveAnswerErrors = (errors) => ({
    type: RECEIVE_ANSWER_ERRORS,
    errors
});

export const clearAnswerErrors = () => ({
    type: CLEAR_ANSWER_ERRORS
});

export const createAnswer = (answer) => dispatch => (
    AnswerAPIUtil.createAnswer(answer)
        .then((answer) => (dispatch(receiveAnswer(answer))),
            err => (dispatch(receiveAnswerErrors(err.responseJSON))))
);

export const fetchAnswers = () => dispatch => (
    AnswerAPIUtil.fetchAnswers()
        .then((answers) => dispatch(receiveAnswers(answers)))
);

export const fetchAnswer = (answerId) => dispatch => (
    QuestionAPIUtil.fetchAnswer(answerId)
        .then((payload) => dispatch(receiveAnswer(payload)))
);