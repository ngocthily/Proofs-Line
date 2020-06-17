import React from 'react';
import { connect } from 'react-redux';
import { createVote, updateVote } from '../../actions/votes_actions';

class Answer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upvoteBtnColor: '#bbc0c4',
            downvoteBtnColor: '#bbc0c4',
            countUpvotes: 0,
            countDownvotes: 0,
            currentUserVote: {}
        }
    }

    componentDidMount() {
        this.checkUpvoted();
        this.checkDownvoted();
        this.totalVotes();
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
            answer_id: this.props.answer.id
        }

        if (!this.props.answer.voted_by_current_user) {
            this.props.createVote(newVote);
            this.props.answer.voted_by_current_user = true;
        } else {
            this.getCurrentVote();
            this.state.currentUserVote.vote_type = "upvote";
            this.props.updateVote(this.state.currentUserVote);
            this.setState({
                countUpvotes: this.state.countUpvotes += 1
            });
        }

        this.setState({
            upvoteBtnColor: "#f47f25",
            downvoteBtnColor: "#bbc0c4",
            countUpvotes: this.state.countUpvotes += 1
        });
    }

    downvote(e) {
        e.preventDefault();
        const newVote = {
            vote_type: "downvote",
            post_type: "answer",
            post_id: this.props.answer.id,
            answer_id: this.props.answer.id
        }

        if (!this.props.answer.voted_by_current_user) {
            this.props.createVote(newVote);
            this.props.answer.voted_by_current_user = true;
        } else {
            this.getCurrentVote();
            this.state.currentUserVote.vote_type = "downvote";
            this.props.updateVote(this.state.currentUserVote);
            this.setState({
                countDownvotes: this.state.countDownvotes += 1
            });
        }

        this.setState({
            upvoteBtnColor: "#bbc0c4",
            downvoteBtnColor: "#f47f25",
            countDownvotes: this.state.countDownvotes += 1
        });
    }

    checkUpvoted() {
        if (this.props.answer.voted_by_current_user) {
            this.props.votes.map(vote => {
                if (vote.vote_type === "upvote") {
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
                if (vote.vote_type === "downvote") {
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
            if (vote.vote_type === "upvote") {
                count+=1;
            }
        });
        return count
    }

    countDownvotes() {
        let count = 0;
        this.props.answer.votes.forEach(vote => {
            if (vote.vote_type === "downvote") {
                count += 1;
            }
        });
        return count
    }

    totalVotes() {
        this.setState({
            countUpvotes: this.countUpvotes(),
            countDownvotes: this.countDownvotes()
        })
    }

    render(){
        const totalCount = this.state.countUpvotes - this.state.countDownvotes;

        return (
            <div>
                <ul>
                    <li className="answer-to-q">
                        <div className="voting-answer-section">
                            <div>
                                {/* <VoteIndexContainer/> */}
                                <div className="voting-btns">
                                    <div className="answer-up">
                                        <i className="fas fa-caret-up fa-4x" 
                                        style={{ color: this.state.upvoteBtnColor }}
                                        onClick={this.upvote.bind(this)}></i>
                                    </div>
                                    <div>
                                        {totalCount}
                                    </div>
                                    {/* {voteList(this.props.answer.votes)} */}
                                    <div className="answer-down">
                                        <i className="fas fa-caret-down fa-4x" 
                                        style={{ color: this.state.downvoteBtnColor }}
                                        onClick={this.downvote.bind(this)}></i>
                                    </div>
                                </div>
                                {/* <VoteIndexContainer
                                    answer = {this.props.answer}
                                    votes = {this.props.answer.votes}
                                /> */}
                            </div>
                            <div className="answer-section-ind">
                                <p>
                                    {this.props.answer.body}
                                </p>
                                <p className="answer-date">
                                    Asked on {this.props.answer.created_at ? this.props.answer.created_at.substring(0, 10) : null}
                                </p>
                                <p className="answer-author">
                                    By {this.props.user.username}
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