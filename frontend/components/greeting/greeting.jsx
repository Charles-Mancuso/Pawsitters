import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm({email: "demouser@yahoo.com", password: "demouser"});
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render () {
        if (this.props.user) {
            return (
                <div>
                    <h2>Welcome to Pawsitters, {this.props.user.email}!</h2>
                    <button onClick={this.handleLogout.bind(this)}>Logout</button>
                </div>
            )
        } else {
            return (
                <div className="background-image">
                    <div className="main-nav">
                        <Link to="/" className="left-nav">
                            <h3><i className='fas fa-paw'></i>Sitters</h3>
                        </Link>
                        <nav className="right-nav">
                            <ul>
                                <li>
                                    <input
                                        className="demo-login-button" 
                                        type="submit" 
                                        onClick={this.handleSubmit.bind(this)}
                                        value="Demo Login"
                                    />
                                </li>
                                <li>
                                    <Link to='/signup' className="sign-up-button">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to='/login' className="log-in-button">Sign In</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )
        }
    }
}

export default Greeting;