import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import NoteContainer from '../note/note_container';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.routeToQuestions = this.routeToQuestions.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
        window.scrollTo(0, 0);
    }
   
    routeToQuestions() {
        this.props.history.push('/questions/new')
    }

    timeAgo() {

    }

    render() {
        const count = this.props.questions.length;

        const countOfVotes = (questionVotes) => {
            let numOfUpvotes = 0;
            let numOfDownvotes = 0;
            for (let i=0; i< questionVotes.length; i++) {
                if (questionVotes[i].post_type === "question") {
                    if (questionVotes[i].vote_type === "upvote") {
                        numOfUpvotes+=1;
                    } else if (questionVotes[i].vote_type === "downvote") {
                        numOfDownvotes+=1
                    }
                }
            }
            return numOfUpvotes - numOfDownvotes
        }

        const timeAgo = (secs) => (
            (secs < 60) ?
            `asked ${Math.round(secs)} secs ago` :
            (secs === 60) ?
            `asked 1 min ago` :
            (secs < 3600) ?
            `asked ${Math.round(secs/60)} mins ago` :
            (secs === 3600) ?
            `asked 1 hour ago` :
            (secs < 86400) ?
            `asked ${Math.round(secs/3600)} hours ago` :
            `asked ${Math.round(secs/86400)} days ago`
        );
        
        return (
        <div className="questions-wrapper">
            <div className="question-index-navbar">
                <NavBarContainer/>
            </div>
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
                <div className = "count-questions">
                    {count} questions 
                </div>
                <div>
                    {this.props.questions.map((question) => (
                        <div key={question.id}>
                                <li className="ind-question">
                                    <div className="ind-question-left-side">
                                        <p className="ind-question-vote-count">{countOfVotes(question.votes)}</p>
                                        <p className="ind-question-vote-word">votes</p>
                                        <p className="ind-question-answer-count">{question.countOfAnswers}</p>
                                        <p className="ind-question-answer-word">answers</p>
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
                                        <p className="question-time-ago">{timeAgo(question.secs)}</p>
                                        <p className="question-author">{question.author}</p>
                                    </div>
                                    </div>
                                </li>
                        </div>
                    ))}
                </div>
            </div>
            <div className="questions-index-note">
                <NoteContainer/>
            </div>
            </div>
            <div className="question-ind-footer">
                <Footer/>
            </div>
        </div>
        )
    }
}

export default QuestionIndex;