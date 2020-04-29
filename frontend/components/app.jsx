import React from 'react';
import Home from './home/home';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route';

const App = () => (
    <div>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);

export default App;