import React from 'react';
import SignupContainer from './session/signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route';

const App = () => (
    <div>
        <h1>Proofs Line</h1>
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>
);

export default App;