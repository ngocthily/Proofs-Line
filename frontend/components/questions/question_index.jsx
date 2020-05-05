import React from 'react';
import { Link } from 'react-router-dom';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.routeToQuestions = this.routeToQuestions.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }

    routeToQuestions() {
        this.props.history.push('/questions/new')
    }

    render() {
        return (
        <div className = "questions">
            <div className = "question-first-line">
            <h3 className = "question-header">All Questions</h3>
            <div>
            <button className = "ask-question-button" onClick = {this.routeToQuestions}>Ask Question</button>
            </div>
            </div>
            <div className = "all-questions">
                {this.props.questions.map((question) => (
                    <div key={question.id}>
                        <hr className = "question-divider"/>
                        <li className = "ind-question">
                        <Link to = {`questions/${question.id}`}>
                            <p>{question.title}</p>
                        </Link>
                        {question.body}
                        </li>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

export default QuestionIndex;