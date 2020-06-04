import { RECEIVE_VOTE } from '../actions/votes_actions';

const votesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VOTE:
            return Object.assign({}, state, { [action.vote.id]: action.vote });
        default:
            return state;
    }
}

export default votesReducer;