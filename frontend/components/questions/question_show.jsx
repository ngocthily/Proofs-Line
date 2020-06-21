import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Note from '../note/note';
import AnswerListItem from '../answers/answer_list_item';
import Popup from "reactjs-popup";

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvoteBtnColor: "#bbc0c4",
            downvoteBtnColor: "#bbc0c4",
            currentUserVote: {},
            currentVoteCount: 0,
            open: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.routeToAsk = this.routeToAsk.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.question.votes !== prevProps.question.votes) {
            this.setUpvoteBtn();
            this.setDownvoteBtn();
            this.currentUserVoteCount();
        }
    }

    setUpvoteBtn() {
        let didUpvote = false;
        if (this.props.question.votes) {
            this.props.question.votes.map(vote => {
                if (vote.user_id === this.props.currentUserId && vote.post_type === "question") {
                    if (vote.vote_type === "upvote") {
                        didUpvote = true;
                    } 
                }
            });
        }

        if (didUpvote) {
            this.setState({
                upvoteBtnColor: "#f47f25",
                downvoteBtnColor: "#bbc0c4"
            })
        }
    }   

    setDownvoteBtn() {
        let didDownvote = false;
        if (this.props.question.votes) {
            this.props.question.votes.map(vote => {
                if (vote.user_id === this.props.currentUserId && vote.post_type === "question") {
                    if (vote.vote_type === "downvote") {
                        didDownvote = true;
                    }
                }
            });
        }

        if (didDownvote) {
            this.setState({
                upvoteBtnColor: "#bbc0c4",
                downvoteBtnColor: "#f47f25"
            })
        }
    }   

    handleDelete() {
        this.props.deleteQuestion(this.props.questionId);
    }


    routeToAsk() {
        this.props.history.push(`/questions/new`);
    }

    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }

    getCurrentVote() {
        if (this.props.question.votes) {
            this.props.question.votes.map(vote => {
                if (Object.keys(vote).length !== 0) {
                    if (vote.user_id === this.props.currentUserId && vote.post_type === "question") {
                        this.state.currentUserVote = vote;
                        return true;
                    }
                }
            });
        }
    }

    upvote(e) {
        e.preventDefault();
        
        const newVote = {
            vote_type: "upvote",
            post_type: "question",
            post_id: this.props.question.id,
            answer_id: this.props.question.id,
            question_id: this.props.question.id
        }

        if (!this.props.currentUserId) {
            this.openModal();
        } else {
            if (!this.props.question.voted_by_current_user) {
                this.props.createVote(newVote);
                this.props.question.voted_by_current_user = true;
                this.setState({
                    upvoteBtnColor: "#f47f25",
                    downvoteBtnColor: "#bbc0c4",
                });
                this.state.currentVoteCount = 1;
            } else {
                this.getCurrentVote();
                if (this.state.currentUserVote.vote_type === "upvote") {
                    this.state.currentUserVote.vote_type = "neither";
                    this.props.updateVote(this.state.currentUserVote);
                    this.setState({
                        upvoteBtnColor: "#bbc0c4",
                        downvoteBtnColor: "#bbc0c4",
                    });
                    this.state.currentVoteCount = 0;
                } else {
                    this.state.currentUserVote.vote_type = "upvote";
                    this.props.updateVote(this.state.currentUserVote);
                    this.setState({
                        upvoteBtnColor: "#f47f25",
                        downvoteBtnColor: "#bbc0c4",
                    });
                    this.state.currentVoteCount = 1;
                }
            }
        }
    }

    downvote(e) {
        e.preventDefault();
        const newVote = {
            vote_type: "downvote",
            post_type: "question",
            post_id: this.props.question.id,
            answer_id: this.props.question.id,
            question_id: this.props.question.question_id
        }

        if (!this.props.currentUserId) {
            this.openModal();
        } else {
            if (!this.props.question.voted_by_current_user) {
                this.props.createVote(newVote);
                this.props.question.voted_by_current_user = true;
                this.setState({
                    upvoteBtnColor: "#bbc0c4",
                    downvoteBtnColor: "#f47f25"
                });

                this.state.currentVoteCount = -1;
            } else {
                this.getCurrentVote();
                if (this.state.currentUserVote.vote_type === "downvote") {
                    this.state.currentUserVote.vote_type = "neither";
                    this.props.updateVote(this.state.currentUserVote);
                    this.setState({
                        upvoteBtnColor: "#bbc0c4",
                        downvoteBtnColor: "#bbc0c4"
                    });

                    this.state.currentVoteCount = 0;
                } else {
                    this.state.currentUserVote.vote_type = "downvote";
                    this.props.updateVote(this.state.currentUserVote);
                    this.setState({
                        upvoteBtnColor: "#bbc0c4",
                        downvoteBtnColor: "#f47f25"
                    });

                    this.state.currentVoteCount = -1;
                }
            }
        }
    }

    countUpvotes(questionVotes) {
        let count = 0;
        questionVotes.map(vote => {
            if (vote.vote_type === "upvote" && 
            vote.post_type === "question" && 
            vote.user_id !== this.props.currentUserId) {
                count += 1
            }
        });
        return count;
    }

    countDownvotes(questionVotes) {
        let count = 0;
        questionVotes.map(vote => {
            if (vote.vote_type === "downvote" && 
            vote.post_type === "question" && 
            vote.user_id !== this.props.currentUserId) {
                count += 1
            }
        });
        return count;
    }

    currentUserVoteCount() {
        let upvoted = false;
        let downvoted = false;
        this.props.question.votes.map(vote => {
            if (vote.vote_type === "upvote" && vote.post_type === "question" 
                && vote.user_id === this.props.currentUserId) {
                    upvoted = true;
            } else if (vote.vote_type === "downvote" && vote.post_type === "question"
                && vote.user_id === this.props.currentUserId) {
                    downvoted = true;
            } 
        })

        if (upvoted) {
            this.state.currentVoteCount = 1;
        } else if (downvoted) {
            this.state.currentVoteCount = -1;
        } else {
            this.state.currentVoteCount = 0;
        }
    }

    render() {
        const { question, currentUserId, authorId } = this.props;

        const editLink = (currentUserId === authorId) ? 
            <div>
                <Link to={`/questions/${question.id}/edit`}>Edit</Link> &nbsp;
                <Link to="/questions" onClick = {this.handleDelete}>Delete</Link>
            </div> 
            :
            <div className="answer-response">
                <AnswerFormContainer />
            </div>

        const count = this.props.answers ?
                        (<div className = "amt-of-answers-per-q">{this.props.answers.length} Answers</div> ):
                        (<div className="amt-of-answers-per-q"> 0 Answers</div>)

        const answerList = (answers, currentUserId) => (
            answers.map(answer => (
                <AnswerListItem
                    answer={answer}
                    currentUserId={currentUserId}
                    key={answer.id}
                />
            ))
        );

        const timeAgo = (secs) => (
            (secs < 60) ?
                `${Math.round(secs)} secs ago` :
            (secs === 60) ?
                `1 min ago` :
            (secs < 3600) ?
                `${Math.round(secs / 60)} mins ago` :
            (secs === 3600) ?
                `1 hour ago` :
            (secs < 86400) ?
                `${Math.round(secs / 3600)} hours ago` :
                `${Math.round(secs / 86400)} days ago`
        );

        return (
            <div>
                <div className="ind-question-navbar">
                    <NavBarContainer/>
                </div>
                <div className ="ind-question-midsection">
                    <div className="ind-question-sidebar">
                        <Sidebar/>
                    </div>
                    <div className = "ind-question-page">
                        <div className = "ind-first-line">
                            <div className="ind-question-title-section">
                                <p className = 'ind-question-title'>{question.title}</p>
                                <div className="ind-question-asked">
                                    <p className="ind-question-show-asked-word">Asked &nbsp;</p>
                                    <p>{timeAgo(question.secs)}</p>
                                </div>
                            </div>
                            <div>
                            <button className="ask-question-button" onClick = {this.routeToAsk}>Ask Question</button>
                            </div>
                        </div>
                        <div className="ind-question-whole">
                            <div className="question-voting">
                                <div className="question-upvote">
                                    <i className="fas fa-caret-up fa-4x"
                                        style={{ color: this.state.upvoteBtnColor }}
                                        onClick={this.upvote.bind(this)}
                                    >
                                    </i>
                                </div>
                                <div>
                                <Popup
                                    open={this.state.open}
                                    closeOnDocumentClick
                                    onClose={this.closeModal}
                                        contentStyle={{ width: 360, borderRadius: 8}}
                                >
                                    <div className="popup-message">
                                        <a className="close" onClick={this.closeModal}>
                                        </a>
                                        <div className="popup-message-content">
                                            <div className="popup-message-header">
                                                Join the Proofs Line community
                                            </div>
                                            <br></br>
                                            <div className="popup-message-info">
                                                Join Proofs Line to start unlocking new privileges
                                                like asking questions, answering, and voting
                                            </div>
                                            <div className="popup-btn-signup-wrapper">
                                                <Link to="/signup">
                                                    <button className="popup-btn-signup">
                                                        <i className="fas fa-envelope"></i> 
                                                        &nbsp;
                                                        Sign up using Email
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="popup-message-signup">
                                                Already have an account? &nbsp;
                                                <Link to="/login">Log in</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                                </div>
                                <div className="question-show-vote-count">
                                    {(question.votes) ?
                                        (this.countUpvotes(question.votes) 
                                        - this.countDownvotes(question.votes)
                                            + this.state.currentVoteCount) : null}
                                </div>
                                <div className="question-downvote">
                                    <i className="fas fa-caret-down fa-4x"
                                        style={{ color: this.state.downvoteBtnColor}}
                                        onClick={this.downvote.bind(this)}
                                    >
                                    </i>
                                </div>
                            </div>
                            <div className='ind-question-body'>
                                {question.body} 
                                { ((currentUserId) && (currentUserId === authorId)) ? 
                                <div>
                                {editLink}
                                </div> : null}
                            <div className="ind-question-time-author">
                                <p className="ind-question-show-asked">asked {timeAgo(question.secs)}</p>
                                <p className="ind-question-show-author">{question.author}</p>
                            </div>
                            </div>
                        </div>
                        <div className = 'count-answers'>
                            {count}
                        </div>
                        <div>

                        </div>
                        <div className = "whole-answer-section">
                            {(this.props.answers) ? 
                                (answerList(this.props.answers, this.props.currentUserId)) : 
                                null}
                        </div>
                        {(currentUserId !== authorId) ?
                            <div>
                                {editLink}
                            </div> : null}
                    </div>
                    <div className="ind-question-note">
                        <Note/>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionShow;