import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionForm);