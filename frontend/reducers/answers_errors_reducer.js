import {
    RECEIVE_ANSWER_ERRORS,
    CLEAR_ANSWER_ERRORS
} from '../actions/answers_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ANSWER_ERRORS:
            if (action.errors.includes("User can't be blank") || action.errors.includes("User must exist") ) {
                return ["Must be logged in"]
            }
            return action.errors;
            // quick fix but don't know why it isn't showing up
            // return ["Can't be blank"];
        case CLEAR_ANSWER_ERRORS:
            return [];
        default:
            return state;
    }
};