import {
    RECEIVE_QUESTION,
    RECEIVE_ANSWER
} from '../actions/questions_actions';
import { RECEIVE_VOTE } from '../actions/votes_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_QUESTION:
            return Object.assign({}, state, action.answers);
        case RECEIVE_ANSWER:
            const { answer } = action;
            return Object.assign({}, state, { [answer.id]: answer });
        // case RECEIVE_VOTE:
        //     const { vote } = action;
        //     return Object.assign({}, state, { [vote.id]: vote });
        // this nests it in the entities => answers (empty)
        default: 
            return state;
    }
}

export default answersReducer;