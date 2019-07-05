import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

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
                <div className="background-image">
                    <div>
                        <div className="main-nav">
                            <Link to="/" className="left-nav">
                                <h3><i className='fas fa-paw'></i>Sitters</h3>
                            </Link>
                            <nav className="right-nav">
                                <ul>
                                    <li>
                                        <div className="greeting">welcome, {this.props.user.email}!</div>
                                    </li>
                                    <li>
                                        <Link to="/bookings/index" className="demo-login-button">
                                            Bookings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sitters" className="demo-login-button">
                                            Sitters
                                        </Link>
                                    </li>
                                    <li>
                                        <input
                                            className="demo-login-button" 
                                            type="submit" 
                                            onClick={this.handleLogout.bind(this)}
                                            value="Logout"
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div>                    
                        <div className="slogan"></div>
                        <div className="slogan1">Local, Loving Pet Care</div>
                        <div className="slogan2">Book trusted sitters and dog walkers</div>
                        <div className="slogan2">who'll treat your pets like family</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="background-image">
                    <div>
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
                    <div className="slogan">
                        <div className="slogan1">Local, Loving Pet Care</div>
                        <div className="slogan2">Book trusted sitters and dog walkers</div>
                        <div className="slogan2">who'll treat your pets like family</div>
                    </div>
                </div>
            )
        }
    }
}

export default Greeting;