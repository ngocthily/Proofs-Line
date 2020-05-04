import React from 'react';
import { withRouter } from 'react-router';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeToQuestions = this.routeToQuestions.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createQuestion(this.state);
        this.routeToQuestions();
    }

    handleInput(type) {
        return (e) => {this.setState({ [type]: e.currentTarget.value})};
    } 

    routeToQuestions() {
        this.props.history.push(`/questions/${question.id}`);
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
                    onChange = {this.handleInput('body')}
                />
                <br/>
                <input
                    type= "submit" 
                    value = "Post your question"
                    className = "post-question-btn"
                />
            </form>
        </div>
        )
    }
}

export default withRouter(QuestionForm);