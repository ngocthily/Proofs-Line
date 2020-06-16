import { RECEIVE_QUESTION } from '../actions/questions_actions';
import { RECEIVE_ANSWER, RECEIVE_ANSWERS } from '../actions/answers_actions'; 
import { RECEIVE_VOTE } from '../actions/votes_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_QUESTION:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWERS:
            return action.answers
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: action.answer });
        // case RECEIVE_VOTE:
        //     return Object.assign({}, state, { votes: action.vote })
            // const newState = Object.assign({}, state);
            // newState[action.answer.question_id].answerIds.push(action.answer.id);
            // return newState;
        case RECEIVE_VOTE:
            const newState = Object.assign({}, state);
            newState[action.vote.post_id].votes.push(action.vote)
            return newState;
        default: 
            return state;
    }
}

export default answersReducer;