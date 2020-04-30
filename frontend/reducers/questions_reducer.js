import { RECEIVE_ALL_QUESTIONS } from '../actions/questions_actions';

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign({}, oldState, action.questions);  
        default:
            return oldState;     
    }
}

export default questionsReducer;