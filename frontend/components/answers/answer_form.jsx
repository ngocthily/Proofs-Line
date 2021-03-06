import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillUnmount() {
        this.props.clearAnswerErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const questionId = parseInt(this.props.match.params.questionId);
        const answer = Object.assign({}, this.state, {
            question_id: questionId
        });
        this.props.createAnswer(answer);
        this.state.body = "";
        // this clears error if body is empty but then you fill body and hit submit
        // would rather have it to be if a person is typing the error will go away
        this.props.clearAnswerErrors();
    }

    // update(type) {
    //     return e => this.setState({ [type]: e.currentTarget.value});
    // }

    handleChange(value, delta, source, editor) {
        this.setState({ body: editor.getHTML() })
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

    render() {
        return (
            <div className="answer-form">
                <form onSubmit = {this.handleSubmit}>
                    <label className = "your-answer-label">Your Answer</label>
                    <br/>
                    {/* <textarea
                        id="answer-body"
                        cols = "100"
                        rows = "10"
                        value = {this.state.body}
                        onChange = {this.update("body")}
                    /> */}
                    <ReactQuill
                        value={this.state.body}
                        onChange={this.handleChange}
                    />
                    <br/>
                    {this.renderErrors()}
                    <br/>
                    <button className="answer-btn">Post Your Answer</button>
                </form>
            </div>
        )
    }
}

export default withRouter(AnswerForm);