import { 
    RECEIVE_ALL_QUESTIONS,
    RECEIVE_QUESTION 
} from '../actions/questions_actions';

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS:
            // let questions = {};
            // action.questions.forEach(question => {
            //     questions[question.id] = question;
            // });
            // return action.questions;
            return Object.assign({}, state, action.questions);
        // case RECEIVE_QUESTION:
        //     return Object.assign({}, state, {[action.questions.id]: action.questions});
        case RECEIVE_QUESTION:
            newState = Object.assign({}, state);
            newState[action.question.id] = action.question;
            return newState;
        default:
            return state;     
    }
}

export default questionsReducer;