import { RECEIVE_QUESTION } from '../actions/questions_actions';
import { RECEIVE_ANSWER, RECEIVE_ANSWERS } from '../actions/answers_actions'; 
import { RECEIVE_VOTE } from '../actions/votes_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_QUESTION:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: action.answer });
        // case RECEIVE_VOTE:
        //     return Object.assign({}, state, { [action.vote.id]: action.vote })
        // case RECEIVE_VOTE:
        //     return Object.assign({}, state, { [action.answer.id.votes]: action.vote });
        default: 
            return state;
    }
}

export default answersReducer;