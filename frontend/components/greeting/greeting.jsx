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
            <div className="main-nav">
                <Link to="/" className="left-nav">
                    <h3><i className='fas fa-paw'>sitters</i></h3>
                </Link>
                <nav className="right-nav">
                        <ul>
                        <li>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                        <li>
                            <Link to='/login'>Log In</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Greeting;