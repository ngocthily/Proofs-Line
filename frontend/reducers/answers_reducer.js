import { RECEIVE_QUESTION } from '../actions/questions_actions';
import { RECEIVE_ANSWER } from '../actions/answers_actions'; 

const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_QUESTION:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: action.answer });
        default: 
            return state;
    }
}

export default answersReducer;