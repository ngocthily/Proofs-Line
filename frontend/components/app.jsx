import React from 'react';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import QuestionIndexContainer from './questions/question_index_container';
// import QuestionFormContainer from './questions/question_form_container';
import { Route, ProtectedRoute } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer}/>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/questions" component={QuestionIndexContainer} />
        {/* <ProtectedRoute exact path="/questions/new" component={QuestionFormContainer}/> */}
    </div>
);

export default App;