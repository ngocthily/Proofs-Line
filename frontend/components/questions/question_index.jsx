import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';

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
        // need to redo once answers comes in
        let count = this.props.questions.length;
        return (
        <div>
            <NavBarContainer/>
            {/* sidebar goes here */}
            <Sidebar/>
            <div className = "questions">
                <div className = "question-first-line">
                    <h3 className = "question-header">All Questions</h3>
                    <div>
                        <button className = "ask-question-button" onClick = {this.routeToQuestions}>Ask Question</button>
                    </div>
                </div>
                <div className = "count-unanswered-q">
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
        </div>
        )
    }
}

export default QuestionIndex;