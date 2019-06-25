import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
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
                <form onSubmit={this.handleSubmit}>
                    session form jsx
                <br/>
                    {this.showErrors()}
                <br/>
                <div>
                    <label>Username:
                        <input type="text" 
                        placeholder="username" 
                        onChange={this.update("username")}/>
                    </label>
                <br/>
                    <label>Password:
                        <input type="password"
                        placeholder="password"
                        onChange={this.update("password")} />
                    </label>
                <br/>
                    <label>Email:
                    <input type="text"
                            placeholder="email"
                            onChange={this.update("email")} />
                    </label>

                    <input type="submit" value={this.props.formType}/>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);