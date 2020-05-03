import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state)
            // .then(() => this.props.history.push('/questions'));
    }

    handleInput(type) {
        return (e) => {this.setState({ [type]: e.currentTarget.value })};
    }

    renderErrors() {
        return (
            <ul className = 'signup-errors'>
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
            <div className = "whole-signup-form">
            <div className = "signup-form-center">
            <div className = "signup-description">
                <h3>Join the Proofs Line community</h3>
                <p>Get unstuck -- ask a question</p>
                <p>Unlock new privileges like voting and commenting</p>
            </div>
            <div className = "signup-form">
                <form onSubmit = {this.handleSubmit}>
                    <label className = 'signup-display-name'>
                            Display Name
                        <br/>
                        <input
                            className="signup-textbox"
                            type = "text"
                            value = {this.state.username}
                            onChange = {this.handleInput('username')}
                        />
                    </label>
                    <br />
                    <label className = 'signup-email'>
                            Email
                        <br/>
                        <input
                            className = "signup-textbox"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <br />
                    <label className = 'signup-password'>
                                Password
                        <br/>
                        <input
                            className= "signup-textbox"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                            {this.renderErrors()}
                    <br />
                    <button className = "signup-submit-btn" type="submit">Sign up</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

export default Signup;