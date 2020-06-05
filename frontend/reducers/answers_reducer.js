import {
    RECEIVE_QUESTION,
    RECEIVE_ANSWER,
    RECEIVE_ANSWERS
} from '../actions/questions_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ANSWERS:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWER:
            nextState = Object.assign({}, state);
            nextState[action.answer.id] = action.answer;
            return nextState;
        default: 
            return state;
    }
}

export default answersReducer;