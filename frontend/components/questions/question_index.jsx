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
    
    // componentDidUpdate(prevProps) {
    //     if (prevProps.questions !== this.props.questions) {
    //         console.log('questions state has changed')
    //         this.setState({ questions: this.props.fetchQuestions() })
    //     }
    // }

    routeToQuestions() {
        this.props.history.push('/questions/new')
    }

    render() {
        let count = this.props.questions.length;
        return (
        <div className = "questions">
            <div className = "question-first-line">
                <h3 className = "question-header">All Questions</h3>
                <div>
                    <button className = "ask-question-button" onClick = {this.routeToQuestions}>Ask Question</button>
                </div>
            </div>
            <div>
            {count} questions with no accepted answers
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