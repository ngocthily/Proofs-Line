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
            <div className="session-form">
                <form>
                    {this.renderErrors()}
                    <label>Email
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password
                        <input
                            type='text'
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>Log in</button>
                        {/* <input 
                            type = 'submit'
                            value = 'Log in demo'
                            onClick={(e) => this.demoLogin(e)}
                        /> */}
                        <button onClick={this.demoLogin}>Log in demo</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default Login;