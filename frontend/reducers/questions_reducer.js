import { 
    RECEIVE_ALL_QUESTIONS,
    RECEIVE_QUESTION, 
    REMOVE_QUESTION } from '../actions/questions_actions';
import { RECEIVE_ANSWER } from '../actions/answers_actions';
import { RECEIVE_VOTE } from '../actions/votes_actions';

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            const newQuestion = { [action.question.id]: action.question };
            return Object.assign({}, state, newQuestion);
        case REMOVE_QUESTION:
            nextState = Object.assign({}, state);
            delete nextState[action.questionId];
            return nextState;
        case RECEIVE_ANSWER:
            const newState = Object.assign({}, state);
            newState[action.answer.question_id].answerIds.push(action.answer.id);
            return newState;
        // case RECEIVE_VOTE:
        //     return Object.assign({}, state, action.answer.voteIds.push(action.vote.id));
            // return newState;
        default:
            return state;     
    }
}

export default questionsReducer;