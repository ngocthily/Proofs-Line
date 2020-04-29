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

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state);
    }

    handleInput(type) {
        return (e) => {this.setState({ [type]: e.target.value })};
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
            <div className = "signup-form">
                <h2>Sign up!</h2>
                <form onSubmit = {this.handleSubmit}>
                    {this.renderErrors()}
                    <label>
                        Username:
                        <input
                            type = "text"
                            value = {this.state.username}
                            onChange = {this.handleInput('username')}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        )
    }
}

export default Signup;