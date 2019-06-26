import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            
        </header>
        <Switch>
            <Route exact path="/" component={ GreetingContainer } />
            <AuthRoute exact path="/login" component={ LoginFormContainer } />
            <AuthRoute exact path="/signup" component={ SignupFormContainer } />
        </Switch>
    </div>
);

export default App;