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
            // no cause becomes duplicates
        case RECEIVE_VOTE:
            const newVote = Object.assign({}, state);
            if (action.vote.post_type === "question") {
                newVote[action.vote.question_id].votes.push(action.vote)
            }
            return newVote;
        default:
            return state;     
    }
}

export default questionsReducer;