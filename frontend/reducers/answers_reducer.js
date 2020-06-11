import {
    RECEIVE_QUESTION,
    RECEIVE_ANSWER,
    RECEIVE_ANSWERS
} from '../actions/questions_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_QUESTION:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: answer });
        default: 
            return state;
    }
}

export default answersReducer;