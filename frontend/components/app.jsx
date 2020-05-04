import React from 'react';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import QuestionIndexContainer from './questions/question_index_container';
import QuestionFormContainer from './questions/question_form_container';
import QuestionShowContainer from './questions/question_show_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
            <Route path="/" component={NavBarContainer}/>
            <Route exact path="/" component={Home} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
        {/* <Switch> */}
            <Route exact path="/questions" component={QuestionIndexContainer} />
            <Route exact path= "/questions/:questionId" component={QuestionShowContainer}/>
            <Route exact path="/questions/ask" component={QuestionFormContainer}/>
        {/* </Switch> */}
    </div>
);

export default App;