import React from 'react';
import { connect } from 'react-redux';
import { createVote, updateVote, fetchVotes } from '../../actions/votes_actions';
import { fetchAnswer } from '../../util/answer_api_util';

class Answer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upvoteBtnColor: '#bbc0c4',
            downvoteBtnColor: '#bbc0c4',
            countUpvotes: 0,
            countDownvotes: 0,
            upVoted: false,
            downVoted: false,
            currentUserVote: null

        }
    }

    componentDidMount() {
        this.checkUpvoted();
        this.checkDownvoted();
        this.totalVotes();
    }

    upvote(e) {
        e.preventDefault();
        const newVote = {
            vote_type: "upvote",
            post_type: "answer",
            post_id: this.props.answer.id,
            answer_id: this.props.answer.id
        }

        this.props.answer.votes.map(vote => {
            if (vote.user_id === this.props.currentUserId) {
                this.setState({
                    currentUserVote: vote
                })
                console.log(vote)
            }
        });

        console.log(this.state.currentUserVote)
        if (!this.props.answer.voted_by_current_user) {
            this.props.createVote(newVote);
            this.props.answer.voted_by_current_user = true;
        } else {
            let oldVote = this.props.answer.vote_by_current_user;
            oldVote.vote_type = "upvote";
            this.props.updateVote(oldVote);
        }

        // if (this.props.answer.voted_by_current_user) {
        //     const oldVote = this.props.answer.vote_by_current_user;
        //     oldVote.vote_type = "upvote";
        //     this.props.updateVote(oldVote)
        //     if (this.state.downVoted) {
        //         this.setState({
        //             upvoteBtnColor: "#f47f25",
        //             downvoteBtnColor: "#bbc0c4",
        //             countUpvotes: this.state.countUpvotes += 2
        //         });
        //     } else {
        //         this.setState({
        //             upvoteBtnColor: "#f47f25",
        //             downvoteBtnColor: "#bbc0c4",
        //             countUpvotes: this.state.countUpvotes += 1
        //         });
        //     }
        // } else {
        //     this.props.createVote(newVote);
        //     this.props.answer.voted_by_current_user = true;
        //     this.props.answer.vote_by_current_user = newVote;
        //     if (this.state.downVoted) {
        //         this.setState({
        //             upvoteBtnColor: "#f47f25",
        //             downvoteBtnColor: "#bbc0c4",
        //             countUpvotes: this.state.countUpvotes += 2
        //         });
        //     } else {
        //         this.setState({
        //             upvoteBtnColor: "#f47f25",
        //             downvoteBtnColor: "#bbc0c4",
        //             countUpvotes: this.state.countUpvotes += 1
        //         });
        //     }
        // } 

        // this.setState({
        //     upVoted: true,
        //     downVoted: false
        // })
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
            this.props.answer.vote_by_current_user = this.props.answer.votes[-1];
        } else {
            let oldVote = this.props.answer.vote_by_current_user;
            oldVote.vote_type = "downvote";
            this.props.updateVote(oldVote);
        }
        // if (this.props.answer.voted_by_current_user) {
        //     const oldVote = this.props.answer.vote_by_current_user;
        //     oldVote.vote_type = "downvote";
        //     this.props.updateVote(oldVote);
        //     if (this.state.upVoted) {
        //         this.setState({
        //             upvoteBtnColor: "#bbc0c4",
        //             downvoteBtnColor: "#f47f25",
        //             countDownvotes: this.state.countDownvotes += 2
        //         });
        //     } else {
        //         this.setState({
        //             upvoteBtnColor: "#bbc0c4",
        //             downvoteBtnColor: "#f47f25",
        //             countDownvotes: this.state.countDownvotes += 1
        //         });
        //     }
        // } else {
        //     this.props.createVote(newVote);
        //     this.props.answer.voted_by_current_user = true;
        //     this.props.answer.vote_by_current_user = newVote;
        //     if (this.state.upVoted) {
        //         this.setState({
        //             upvoteBtnColor: "#bbc0c4",
        //             downvoteBtnColor: "#f47f25",
        //             countDownvotes: this.state.countDownvotes += 2
        //         });
        //     } else {
        //         this.setState({
        //             upvoteBtnColor: "#bbc0c4",
        //             downvoteBtnColor: "#f47f25",
        //             countDownvotes: this.state.countDownvotes += 1
        //         });
        //     }
        // }

        // this.setState({
        //     upVoted: false,
        //     downVoted: true
        // })
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

const mapStateToProps = ( { entities: { users } }, { answer, currentUserId}) => {
    return {
        user: users[answer.user_id],
        votes: answer.votes,
        currentUserId
    };
};

const mapDispatchToProps = (dispatch) => ({
    createVote: (vote) => dispatch(createVote(vote)),
    updateVote: (vote) => dispatch(updateVote(vote)),
    fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId)),
    fetchVotes: (answerId) => dispatch(fetchAnswer(answerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);