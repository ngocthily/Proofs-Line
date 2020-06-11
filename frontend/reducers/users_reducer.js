import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_QUESTION } from '../actions/questions_actions';
import { RECEIVE_ANSWER } from '../actions/answers_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.user.id]: action.user});
        case RECEIVE_QUESTION:
            return Object.assign({}, state, action.users);
        default:
            return state;
    }
};

export default usersReducer;