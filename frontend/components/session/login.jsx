import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from '../nav_bar/home_nav_bar_container';

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
            <ul className = 'login-errors'>
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
            <div className="login-page">
                <div className = "whole-login-page">
                    <div className="login-navbar">
                        <HomeNavbar/>
                    </div>
                    <div className="session-form-main">
                        <div className="session-form-center-wrapper">
                            <div className="session-form-center">
                                <Link to="/">
                                    <img className = "icon" src={window.icon}/>
                                </Link>
                                <div className="session-form">
                                    <form>
                                        <div>
                                            <label className="login-email">Email
                                                <input
                                                    className="login-textbox"
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
                                                    type='password'
                                                    value={this.state.password}
                                                    onChange={this.handleInput('password')}
                                                    />
                                            </label>
                                            {this.renderErrors()}
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
                            <br/>
                            <div className = "under-login">
                                <p>
                                    Don't have an account? 
                                    <Link to = "/signup"> Sign up </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;