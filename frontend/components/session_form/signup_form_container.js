import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'signup',
        navLink: <Link to="/login">login instead</Link>
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(SessionForm);