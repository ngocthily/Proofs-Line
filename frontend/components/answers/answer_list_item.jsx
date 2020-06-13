import React from 'react';
import { connect } from 'react-redux';
// import VoteIndexContainer from '../votes/vote_index_container';
// import { fetchAnswers } from '../../actions/answers_actions';
import { createVote, updateVote } from '../../actions/votes_actions';

class Answer extends React.Component {

    upvote() {
        let alreadyVoted = false;
        const newVote = {
            vote_type: "upvote",
            post_type: "answer",
            post_id: this.props.answer.id,
            answer_id: this.props.answer.id
        }

        if (this.props.answer.voted_by_current_user) {
            console.log("voted already")
        }
        // this.props.votes.map(vote => {
        //     // if (vote.user_id === this.props.user.id) {
        //     //     alreadyVoted = true;
        //     // } 
        //     console.log(this.props.currentUserId)
        // });

        // if (alreadyVoted) {
        //     console.log("already voted")
        // } else {
            // this.props.createVote(newVote)
        // }
    }

    render(){
    return (
        <div>
            <ul>
                <li className="answer-to-q">
                    <div className="voting-answer-section">
                        <div>
                            {/* <VoteIndexContainer/> */}
                            <div className="voting-btns">
                                <div className="answer-up">
                                    <button onClick = {this.upvote.bind(this)}>
                                        <i className="fas fa-caret-up fa-4x"></i>
                                    </button>
                                </div>
                                count
                                <div className="answer-down">
                                    <i className="fas fa-caret-down fa-4x"></i>
                                </div>
                            </div>
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

const mapStateToProps = ( { entities: { users } }, { answer }) => {
    return {
        user: users[answer.user_id],
        votes: answer.votes
    };
};

const mapDispatchToProps = (dispatch) => ({
    createVote: (vote) => dispatch(createVote(vote)),
    updateVote: (vote) => dispatch(updateVote(vote))
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);