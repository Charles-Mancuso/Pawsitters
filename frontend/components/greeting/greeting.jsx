import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    if (props.user) {
        return (
            <div>
                <h2>Welcome to Pawsitters, {props.user.username}!</h2>
                <button onClick={props.logout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <nav>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </nav>
            </div>
        )
    }
}

export default Greeting;