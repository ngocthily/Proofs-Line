import { RECEIVE_VOTE, RECEIVE_VOTES } from '../actions/votes_actions';
import { RECEIVE_QUESTION } from '../actions/questions_actions';
import { RECEIVE_ANSWER } from '../actions/answers_actions';

const votesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        // case RECEIVE_QUESTION:
        //     return Object.assign({}, state, action.votes);
        case RECEIVE_ANSWER:
            return Object.assign({}, state, action.votes);
            // case RECEIVE_VOTES:
            //     return action.votes;
        case RECEIVE_VOTE:
            return Object.assign({}, state, { [action.vote.id]: action.vote });
        default:
            return state;
    }
}

export default votesReducer;