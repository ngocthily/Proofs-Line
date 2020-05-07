import { 
    RECEIVE_ALL_QUESTIONS,
    RECEIVE_QUESTION, 
    REMOVE_QUESTION
} from '../actions/questions_actions';

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign({}, state, action.questions);
        case RECEIVE_QUESTION:
            nextState = Object.assign({}, state);
            nextState[action.question.id] = action.question;
            return nextState;
        case REMOVE_QUESTION:
            nextState = Object.assign({}, state);
            delete nextState[action.questionId];
            return nextState;
        default:
            return state;     
    }
}

export default questionsReducer;