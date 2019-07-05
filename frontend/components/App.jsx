import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SitterShowContainer from './sitter/sitter_show_container';
import SitterIndexContainer from './sitter/sitter_index_container';
import BookingIndexContainer from './booking/booking_index_container';
import { AuthRoute } from '../util/route_util';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/sitters" component={ SitterIndexContainer } />
            <Route exact path="/sitters/:sitterId" component={ SitterShowContainer } />
            <Route exact path="/" component={ GreetingContainer } />
            <Route exact path="/bookings/index" component={ BookingIndexContainer } />
            <AuthRoute exact path="/login" component={ LoginFormContainer } />
            <AuthRoute exact path="/signup" component={ SignupFormContainer } />
        </Switch>
    </div>
);

export default App;