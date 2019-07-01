import { connect } from 'react-redux';
import { signup, removeErrors } from "../../actions/session_actions";
import { Link } from 'react-router-dom';
import React from 'react';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'Sign Up',
        message: 'Sign Up for Pawsitters',
        submitMessage: "Already have a Pawsitters account?",
        submitLink: <Link to='/login' className="sign-up-button-session">Sign in now</Link>
    };
};

const mdp = dispatch => {
    return {
      processForm: user => dispatch(signup(user)),
      removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(msp, mdp)(SessionForm);