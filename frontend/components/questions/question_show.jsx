import React from 'react';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId);
    }

    render() {
        return (
        <div className = "ind-question-page">
            <p>{this.props.question.title}</p>
            <p>{this.props.question.body}</p>
        </div>
        )
    }
}

export default QuestionShow;