import React from 'react';

class VoteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    upvote() {
        // : vote_type, : post_type, : post_id, : answer_id)
        // const newVote = {
        //     vote_type: "upvote",
        //     post_type: "answer",
        //     post_id: 
        // }
        // this.props.createVote(this.props.currentUserId)
        console.log(this.props.answers)
    }

    // downvote() {

    // }

    render() {
        return (
            <div className="voting-btns">
                <div className="answer-up">
                    <button onClick={this.upvote.bind(this)}>
                        <i className="fas fa-caret-up fa-4x"></i>
                    </button>
                </div>
                count
                <div className="answer-down">
                    <i className="fas fa-caret-down fa-4x"></i>
                </div>
            </div>
        )
    }
}

export default VoteIndex;