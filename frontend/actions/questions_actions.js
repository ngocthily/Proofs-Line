import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const CLEAR_QUESTION_ERRORS = 'CLEAR_QUESTION_ERRORS';

export const receiveAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

export const receiveQuestion = (question) => ({
    type: RECEIVE_QUESTION,
    question
});

export const receiveQuestionErrors = (errors) => ({
    type: RECEIVE_QUESTION_ERRORS,
    errors
});

export const clearQuestionErrors = () => ({
    type: CLEAR_QUESTION_ERRORS
});

export const fetchQuestions = () => dispatch => (
    QuestionAPIUtil.fetchQuestions()
        .then((questions) => dispatch(receiveAllQuestions(questions)))
);

export const fetchQuestion = (questionId) => dispatch => (
    QuestionAPIUtil.fetchQuestion(questionId)
        .then((question) => dispatch(receiveQuestion(question)))
);

export const createQuestion = (question) => dispatch => (
    QuestionAPIUtil.createQuestion(question)
        .then((question) => (dispatch(receiveQuestion(question))),
            err => (dispatch(receiveQuestionErrors(err.responseJSON))))
);

export const updateQuestion = (question) => dispatch => (
    Question.APIUtil.updateQuestion(question)
        .then((question) => (dispatch(receiveQuestion(question))),
            err => (dispatch(receiveQuestionErrors(err.responseJSON))))
);