import {
    RECEIVE_QUESTION,
    RECEIVE_ANSWERS,
    RECEIVE_ANSWER
} from '../actions/questions_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_QUESTION:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWERS:
            nextState = Object.assign({}, state);
            action.answers.forEach((answer) => nextState[answer.id] = answer);
            return nextState;
        case RECEIVE_ANSWER:
            const { answer } = action;
            return Object.assign({}, state, { [answer.id]: answer });
        default: 
            return state;
    }
}

export default answersReducer;