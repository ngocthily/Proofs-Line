import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import NoteContainer from '../note/note_container';
import ReactPaginate from 'react-paginate';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.routeToQuestions = this.routeToQuestions.bind(this);
        this.state = {
            currentPage: 1,
            questionsPerPage: 15
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
        window.scrollTo(0, 0);
    }
   
    routeToQuestions() {
        this.props.history.push('/questions/new')
    }

    handlePageClick(e) {
        this.setState({
            currentPage: e.selected + 1
        });
        window.scrollTo(0,0);
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

        const indexOfLastQuestion = this.state.currentPage * this.state.questionsPerPage;
        const indexOfFirstQuestion = indexOfLastQuestion - this.state.questionsPerPage;
        const currentQuestions = this.props.questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

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
                    {currentQuestions.map((question, idx) => (
                        <div key={idx}>
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
                <div className="page-numbers">
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={count/15}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
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
