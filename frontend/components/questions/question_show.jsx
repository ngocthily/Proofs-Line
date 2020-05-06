import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to = {`/questions/${this.props.question.id}/edit`}>Edit</Link>
        </div>
        )
    }
}

export default QuestionShow;