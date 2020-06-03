import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import Note from '../note/note';

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
            <div className="question-index-columns">
            <div className="question-index-sidebar">
                <Sidebar/>
            </div>
            <div className = "questions">
                <div className = "question-first-line">
                    <h3 className = "question-header">All Questions</h3>
                    <div>
                        <button className = "ask-question-button" onClick = {this.routeToQuestions}>Ask Question</button>
                    </div>
                </div>
                <div className = "count-unanswered-q">
                    {count} questions with no accepted answers (editing this code)
                </div>
                <div>
                    {this.props.questions.map((question) => (
                        <div key={question.id}>
                                <li className="ind-question">
                                    <div className="ind-question-left-side">
                                        <p>votes</p>
                                        <p>answers</p>
                                        <p>views</p>
                                    </div>
                                    <div className="ind-question-middle">
                                        <Link className = "link-to-question" to = {`questions/${question.id}`}>
                                            {question.title}
                                        </Link>
                                        <br/>
                                        <p className = "ind-body">
                                            {question.body}
                                        </p>
                                    <div className="ind-question-right-side">
                                        {/* problems here but are undefined */}
                                        <p>asked {question.created_at}</p>
                                        <p>{question.author}</p>
                                    </div>
                                    </div>
                                </li>
                        </div>
                    ))}
                </div>
            </div>
            <div className="questions-index-note">
                <Note/>
            </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default QuestionIndex;