import React from 'react';
import { connect } from 'react-redux';
import { createVote, updateVote } from '../../actions/votes_actions';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import ReactHtmlParser from 'react-html-parser'; 

class Answer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upvoteBtnColor: '#bbc0c4',
            downvoteBtnColor: '#bbc0c4',
            currentVoteCount: 0,
            currentUserVote: {},
            open: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.checkUpvoted();
        this.checkDownvoted();
    }

    openModal() {
        this.setState({ open: true });
    }

    closeModal() {
        this.setState({ open: false });
    }

    getCurrentVote() {
        this.props.answer.votes.map(vote => {
            if (vote.user_id === this.props.currentUserId) {
                this.state.currentUserVote = vote;
            }
        });
    }

    upvote(e) {
        e.preventDefault();
        const newVote = {
            vote_type: "upvote",
            post_type: "answer",
            post_id: this.props.answer.id,
            answer_id: this.props.answer.id,
            question_id: this.props.answer.question_id
        }

        if (!this.props.currentUserId) {
            this.openModal();
        } else {
            if (!this.props.answer.voted_by_current_user) {
                this.props.createVote(newVote);
                this.props.answer.voted_by_current_user = true;
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
            post_type: "answer",
            post_id: this.props.answer.id,
            answer_id: this.props.answer.id,
            question_id: this.props.answer.question_id
        }

        if (!this.props.currentUserId) {
            this.openModal();
        } else {
            if (!this.props.answer.voted_by_current_user) {
                this.props.createVote(newVote);
                this.props.answer.voted_by_current_user = true;
                this.setState({
                    upvoteBtnColor: "#bbc0c4",
                    downvoteBtnColor: "#f47f25",
                });
                this.state.currentVoteCount = -1;
            } else {
                this.getCurrentVote();
                if (this.state.currentUserVote.vote_type === "downvote") {
                    this.state.currentUserVote.vote_type = "neither";
                    this.props.updateVote(this.state.currentUserVote);
                    this.setState({
                        upvoteBtnColor: "#bbc0c4",
                        downvoteBtnColor: "#bbc0c4",
                    });
                    this.state.currentVoteCount = 0;
                } else {
                    this.state.currentUserVote.vote_type = "downvote";
                    this.props.updateVote(this.state.currentUserVote);
                    this.setState({
                        upvoteBtnColor: "#bbc0c4",
                        downvoteBtnColor: "#f47f25",
                    });
                    this.state.currentVoteCount = -1;
                }
            }
        }
    }

    checkUpvoted() {
        if (this.props.answer.voted_by_current_user) {
            this.props.votes.map(vote => {
                if (vote.vote_type === "upvote" && vote.post_type === "answer") {
                    this.setState({
                        upvoteBtnColor: "#f47f25",
                        downvoteBtnColor: "#bbc0c4"
                    });
                }
            });
        }
    }

    checkDownvoted() {
        if (this.props.answer.voted_by_current_user) {
            this.props.votes.map(vote => {
                if (vote.vote_type === "downvote" && vote.post_type === "answer") {
                    this.setState({
                        upvoteBtnColor: "#bbc0c4",
                        downvoteBtnColor: "#f47f25"
                    });
                }
            });
        }
    }

    countUpvotes() {
        let count = 0;
        this.props.answer.votes.forEach(vote => {
            if (vote.vote_type === "upvote" 
            && vote.post_type === "answer"
            && vote.user_id !== this.props.currentUserId) {
                count+=1;
            }
        });
        return count
    }

    countDownvotes() {
        let count = 0;
        this.props.answer.votes.forEach(vote => {
            if (vote.vote_type === "downvote" 
            && vote.post_type === "answer"
            && vote.user_id !== this.props.currentUserId) {
                count += 1;
            }
        });
        return count
    }

    render(){
        const totalCount = this.countUpvotes() - this.countDownvotes() + this.state.currentVoteCount;

        const timeAgo = (secs) => (
            (secs < 60) ?
                `answered ${Math.round(secs)} secs ago` :
            (secs === 60) ?
                `answered 1 min ago` :
            (secs < 3600) ?
                `answered ${Math.round(secs / 60)} mins ago` :
            (secs === 3600) ?
                `answered 1 hour ago` :
            (secs < 86400) ?
                `answered ${Math.round(secs / 3600)} hours ago` :
                `answered ${Math.round(secs / 86400)} days ago`
        )

        return (
            <div>
                <ul>
                    <li className="answer-to-q">
                        <div className="voting-answer-section">
                            <div>
                                <div className="voting-btns">
                                    <div className="answer-up">
                                        <i className="fas fa-caret-up fa-4x" 
                                        style={{ color: this.state.upvoteBtnColor }}
                                        onClick={this.upvote.bind(this)}></i>
                                    </div>
                                    <Popup
                                        open={this.state.open}
                                        closeOnDocumentClick
                                        onClose={this.closeModal}
                                    >
                                        <div>
                                            {/* close button */}
                                            <a className="close" onClick={this.closeModal}>
                                            </a>
                                            <div className="popup-message-header">
                                                Join the Proofs Line community
                                        </div>
                                            <div className="popup-message-info">
                                                Join Proofs Line to start unlocking new privileges like asking
                                                questions, answering, and voting
                                        </div>
                                            <Link to="/signup">
                                                <button className="popup-btn-signup">Sign up using Email</button>
                                            </Link>
                                            <div>Already have an account? <Link to="/login">Log in</Link></div>
                                        </div>
                                    </Popup>
                                    <div className="answer-vote-count">
                                        {totalCount}
                                    </div>
                                    <div className="answer-down">
                                        <i className="fas fa-caret-down fa-4x" 
                                        style={{ color: this.state.downvoteBtnColor }}
                                        onClick={this.downvote.bind(this)}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="answer-section-ind">
                                <div>
                                    {ReactHtmlParser(this.props.answer.body)}
                                </div>
                                <p className="answer-date">
                                    {timeAgo(this.props.answer.secs)}
                                </p>
                                <p className="answer-author">
                                    {this.props.user.username}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ entities: { users } }, { answer, currentUserId }) => {
    return {
        user: users[answer.user_id],
        votes: answer.votes,
        currentUserId
    };
};

const mapDispatchToProps = (dispatch) => ({
    createVote: (vote) => dispatch(createVote(vote)),
    updateVote: (vote) => dispatch(updateVote(vote))
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);