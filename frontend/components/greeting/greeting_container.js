import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = (state) => {
    let currentUser = state.entities.users[state.session.id];
    return { user: currentUser };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);
