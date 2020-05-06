import {
    RECEIVE_QUESTION_ERRORS,
    CLEAR_QUESTION_ERRORS
} from '../actions/questions_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_QUESTION_ERRORS:
            return action.errors
        case CLEAR_QUESTION_ERRORS:
            return [];
        default:
            return state;
    }
};