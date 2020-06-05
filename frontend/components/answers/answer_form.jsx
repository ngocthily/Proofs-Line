import React from 'react';
import { withRouter } from 'react-router-dom';

class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearAnswerErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        // const answer = Object.assign({}, this.state);
        const questionId = parseInt(this.props.match.params.questionId);
        const answer = Object.assign({}, this.state, {
            question_id: questionId
        });
        this.props.createAnswer(answer);
    }

    update(type) {
        return e => this.setState({ [type]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            <ul className = "answer-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    refreshPage() {
        setTimeout(window.location.reload(), 20000);
    }

    render() {
        return (
            <div className="answer-form">
                <form onSubmit = {this.handleSubmit}>
                    <label className = "your-answer-label">Your answer</label>
                    <br/>
                    <textarea
                        cols = "100"
                        rows = "10"
                        value = {this.state.body}
                        onChange = {this.update("body")}
                    />
                    <br/>
                    {this.renderErrors()}
                    <br/>
                    <button className="answer-btn" onClick={this.refreshPage}>Post Your Answer</button>
                </form>
            </div>
        )
    }
}

export default withRouter(AnswerForm);