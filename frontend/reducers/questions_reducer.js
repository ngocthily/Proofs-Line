import { 
    RECEIVE_ALL_QUESTIONS,
    RECEIVE_QUESTION, 
    REMOVE_QUESTION,
    RECEIVE_ANSWER } from '../actions/questions_actions';
import { RECEIVE_VOTE } from '../actions/votes_actions';

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
        case RECEIVE_ANSWER:
            const { answer, body } = action;
            nextState = Object.assign({}, state);
            nextState[answer.question_id].answerIds.push(question.id);
            nextState[answer.question_id].body = body;
            return nextState;
        // case RECEIVE_VOTE:
        //     const { vote } = action;
        //     nextState = Object.assign({}, state);
        //     console.log(nextState[action])
        default:
            return state;     
    }
}

export default questionsReducer;