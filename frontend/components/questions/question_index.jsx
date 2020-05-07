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
            <div>
                {this.props.questions.map((question) => (
                    <div key={question.id}>
                            <li className="ind-question">
                                <Link className = "link-to-question" to = {`questions/${question.id}`}>
                                    {question.title}
                                </Link>
                                <br/>
                                <p className = "ind-body">
                                    {question.body}
                                </p>
                            </li>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

export default QuestionIndex;