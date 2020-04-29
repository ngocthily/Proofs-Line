import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    handleInput(type) {
        return (e) => {this.setState({ [type]: e.target.value })};
    }


    render() {
        return (
            <div className="session-form">
                <form>
                    <label>Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>Log In</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default Login;