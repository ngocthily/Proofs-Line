import React from 'react';
import Home from './home/home';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import QuestionIndexContainer from './questions/question_index_container';
import CreateQuestionFormContainer from './questions/create_question_form_container';
import EditQuestionFormContainer from './questions/edit_question_form_container';
import QuestionShowContainer from './questions/question_show_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
            <Route exact path="/" component={Home} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
        <Switch>
            <ProtectedRoute exact path="/questions/new" component={CreateQuestionFormContainer}/>
            <Route path= "/questions/:questionId" component={QuestionShowContainer}/>
            <ProtectedRoute path= "/questions/:questionId/edit" component={EditQuestionFormContainer}/>
            <Route exact path="/questions" component={QuestionIndexContainer} />
        </Switch>
    </div>
);

export default App;