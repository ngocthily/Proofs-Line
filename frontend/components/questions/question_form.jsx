import React from 'react';
// import { withRouter } from 'react-router';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeToIndQuestion = this.routeToIndQuestion.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then((question) => this.routeToIndQuestion(question));
    }

    componentWillUnmount() {
        this.props.clearQuestionErrors();
    }
    
    handleInput(type) {
        return (e) => {this.setState({ [type]: e.currentTarget.value})};
    } 

    routeToIndQuestion(question) {
        this.props.history.push(`/questions/${question.question.id}`);
    }

    renderErrors() {
        return(
            <ul className = "question-errors">
                {this.props.errors.map((error,i) => (
                    <li key ={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
        <div className = "question-form">
            <form onSubmit = {this.handleSubmit}>
                <label>Title</label>
                <br/>
                <input 
                    type = "text"
                    value = {this.state.title}
                    onChange={this.handleInput('title')}
                />
                <br/>
                <label>Body</label>
                <br/>
                <textarea
                    cols="30"
                    rows = "10"
                    value = {this.state.body}
                    onChange={this.handleInput('body')}
                />
                    {this.renderErrors()}
                <br/>
                <input
                    className="post-question-btn"
                    type= "submit" 
                    value = {this.props.formType}
                />
            </form>
        </div>
        )
    }
}

export default QuestionForm;