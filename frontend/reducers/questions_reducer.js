import { 
    RECEIVE_ALL_QUESTIONS,
    RECEIVE_QUESTION 
} from '../actions/questions_actions';

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS:
            // action.questions.forEach(question => {
            //     questions[question.id] = question;
            // });
            return action.questions;
        case RECEIVE_QUESTION:
            return Object.assign({}, state, {[action.question.id]: action.question});
        default:
            return state;     
    }
}

export default questionsReducer;