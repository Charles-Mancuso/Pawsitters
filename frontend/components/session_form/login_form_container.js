import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'Sign In',
        message: 'Sign In to Pawsitters',
        submitMessage: "Don't have a Pawsitters account?",
        submitLink: <Link to='/signup' className="sign-up-button-session">Sign up now</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionForm);