import React from 'react';
import { withRouter } from 'react-router-dom';

class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const questionId = parseInt(this.props.match.params.questionId);
        const answer = Object.assign({}, this.state, {
            question_id: questionId
        });
        this.props.createAnswer(answer);
    }

    update(type) {
        return e => this.setState({ [type]: e.currentTarget.value});
    }

    render() {
        return (
            <div className="answer-form">
                <form onSubmit = {this.handleSubmit}>
                    <label>Your answer</label>
                    <br/>
                    <textarea
                        cols = "30"
                        rows = "10"
                        value = {this.state.body}
                        onChange = {this.update("body")}
                    />
                    <br/>
                    <input type = "submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(AnswerForm);