import React from 'react';
// import { withRouter } from 'react-router';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeToQuestionIdx = this.routeToQuestionIdx.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createQuestion(this.state)
            .then((question) => this.routeToQuestionIdx(question));
    }

    handleInput(type) {
        return (e) => {this.setState({ [type]: e.currentTarget.value})};
    } 

    routeToQuestionIdx(question) {
        this.props.history.push(`/questions/${question.question.id}`);
    }

    render() {
        return (
        <div className = "question-form">
            <form onSubmit = {this.handleSubmit}>
                {/* <div className="question-form"> */}
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
                <br/>
                <input
                    type= "submit" 
                    value = "Post your question"
                    className = "post-question-btn"
                />
                {/* <button className = "post-question-btn">Post your question</button> */}
                {/* </div> */}
            </form>
        </div>
        )
    }
}

export default QuestionForm;