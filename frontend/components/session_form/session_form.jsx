import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(info) {
        return e => this.setState({ [info]: e.target.value });
    }

    showErrors() {
        return (
            <ul>
                {this.props.errors.session.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div className="main-nav-session">
                    <Link to="/" className="left-nav-session">
                        <h3><i className='fas fa-paw'></i>Sitters</h3>
                    </Link>
                    <nav className="right-nav-session">
                        <ul>
                            <li>
                                <Link to='/signup' className="sign-up-button-session">Sign Up</Link>
                            </li>
                            <li>
                                <Link to='/login' className="log-in-button-session">Sign In</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="log-in-sign-up-background">
                    <div className="log-in-sign-up-box">
                        <div>
                            <form onSubmit={this.handleSubmit}>
                            <div className="log-in-sign-up-errors">
                                {this.showErrors()}
                            </div>
                            <br/>
                            <ul className="log-in-sign-up-form">
                                <li className="log-in-sign-up-message">
                                    {this.props.message}
                                </li>
                                <br/>
                                <li>Username
                                    <br/>
                                    <input type="text" 
                                    className="user-input-info-box"
                                    onChange={this.update("username")}/>
                                </li>
                                <br/>
                                <li>Password
                                    <br/>
                                    <input type="password"
                                    className="user-input-info-box"
                                    onChange={this.update("password")} />
                                    </li>
                                <br/>
                                <li>Email
                                    <br/>
                                    <input type="text"
                                    className="user-input-info-box"
                                    onChange={this.update("email")} />
                                </li>
                                <li>
                                    <input className="log-in-sign-up-button" type="submit" value={this.props.formType} />
                                </li>
                                <li className="wrong-page-form">
                                    {this.props.submitMessage} {this.props.submitLink}
                                </li>
                            </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);