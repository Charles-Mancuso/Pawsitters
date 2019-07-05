import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render () {
       if (!this.props.user) {
          return (
            <div className="main-nav-session">
                <Link to="/" className="left-nav-session">
                    <h3>
                        <i className="fas fa-paw" />
                        Sitters
                        </h3>
                </Link>
                <nav className="right-nav-session">
                    <ul>
                        <li>
                            <Link to="/signup" className="sign-up-button-session">
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="log-in-button-session">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
          } else  {
              return (

             
            <div className="main-nav-session">
                <Link to="/" className="left-nav-session">
                    <h3>
                        <i className="fas fa-paw" />
                        Sitters
            </h3>
                </Link>
                <nav className="right-nav-session">
                    <ul>
                        <li>
                            <div className="sign-up-button-session">welcome, {this.props.user.email}!</div>
                        </li>
                        <li>
                                  <Link to="/bookings/index" className="sign-up-button-session">
                                      Bookings
                                      </Link>
                        </li>
                              <li>
                                  <Link to="/sitters" className="sign-up-button-session">
                                      Sitters
                                      </Link>
                              </li>
                        <li>
                            <input
                                className="navbarlogout"
                                type="submit"
                                onClick={this.handleLogout.bind(this)}
                                value="Logout"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        )
              
        }

    }
}

export default NavBar;