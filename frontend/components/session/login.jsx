import React from 'react';

const demoInfo = {
    email: 'demo@proofsline.com',
    password: 'password'
};

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            // .then(() => this.props.history.push('/questions'));
    }

    handleInput(type) {
        return (e) => {this.setState({ [type]: e.currentTarget.value })};
    }

    demoLoginFill() {
        this.setState(demoInfo)
    }

    demoLogin(e) {
        e.preventDefault();
        this.demoLoginFill();
        setTimeout(()=> {this.props.login(demoInfo)}, 1000)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className = "whole-login-page">
            <div className="session-form-center">
            <img className = "logo" src={window.logo}/>
            <div className="session-form">
                <form>
                    {this.renderErrors()}
                    <div>
                    <label className = "login-email">Email
                        <input
                            className = "login-textbox"
                            type='text'
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    </div>
                    <div>
                    <label className = "login-password">Password
                        <input
                            className = "login-textbox"
                            type='text'
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    </div>
                    <div>
                        <div>
                            <button className="login-form-button" onClick={this.handleSubmit}>Log in</button>
                        </div>
                        <div>
                            <button className = "login-form-button" onClick={this.demoLogin}>Log in demo</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Login;