import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const CLEAR_QUESTION_ERRORS = 'CLEAR_QUESTION_ERRORS';
// export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';
export const CLEAR_ANSWER_ERRORS = 'CLEAR_ANSWER_ERRORS';

export const receiveAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

export const receiveQuestion = (question) => ({
    type: RECEIVE_QUESTION,
    question
});

export const removeQuestion = (questionId) => ({
    type: REMOVE_QUESTION,
    questionId
});

export const receiveQuestionErrors = (errors) => ({
    type: RECEIVE_QUESTION_ERRORS,
    errors
});

export const clearQuestionErrors = () => ({
    type: CLEAR_QUESTION_ERRORS
});

export const receiveAnswer = (answer) => ({
    type: RECEIVE_ANSWER,
    answer
});

// export const receiveAnswers = (answers) => ({
//     type: RECEIVE_ANSWERS,
//     answers
// });

export const receiveAnswerErrors = (errors) => ({
    type: RECEIVE_ANSWER_ERRORS,
    errors
});

export const clearAnswerErrors = () => ({
    type: CLEAR_ANSWER_ERRORS
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
    QuestionAPIUtil.updateQuestion(question)
        .then((question) => (dispatch(receiveQuestion(question))),
            err => (dispatch(receiveQuestionErrors(err.responseJSON))))
);

export const deleteQuestion = (questionId) => dispatch => (
    QuestionAPIUtil.deleteQuestion(questionId)
        .then(() => (dispatch(removeQuestion(questionId))))
);

// export const fetchAnswers = (questionId) => dispatch => (
//     QuestionAPIUtil.fetchAnswers(questionId)
//         .then((answers) => dispatch(receiveAnswers(answers)))
// );

export const createAnswer = (answer) => dispatch => (
    QuestionAPIUtil.createAnswer(answer)
        .then((answer) => (dispatch(receiveAnswer(answer))),
            err => (dispatch(receiveAnswerErrors(err.responseJSON))))
);