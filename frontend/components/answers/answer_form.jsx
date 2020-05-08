import React from 'react';
import { withRouter } from 'react-router-dom';

class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId)
    }

    handleSubmit(e) {
        e.preventDefault();
        // const answer = Object.assign({}, this.state, {
        //     question_id: this.props.questionId
        // });
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
                    <button className="answer-btn">Post Your Answer</button>
                </form>
            </div>
        )
    }
}

export default withRouter(AnswerForm);