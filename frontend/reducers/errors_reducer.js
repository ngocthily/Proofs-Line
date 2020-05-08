import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import questionsErrorsReducer from './questions_errors_reducer';
import answersErrorsReducer from './answers_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    question: questionsErrorsReducer,
    answer: answersErrorsReducer
});