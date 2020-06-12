import React from 'react';
import { connect } from 'react-redux';
import VoteIndex from '../votes/vote_index';

const Answer = ({ answer, user }) => {
    const { body, created_at} = answer;
    return (
        <div>
            <ul>
                <li className="answer-to-q">
                    <div className="voting-answer-section">
                        <div>
                            <VoteIndex />
                        </div>
                        <div className="answer-section-ind">
                            <p>
                                {body}
                            </p>
                            <p className="answer-date">
                                Asked on {created_at ? created_at.substring(0, 10) : null}
                            </p>
                            <p className="answer-author">
                                By {user.username}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = ({ entities: { users } }, { answer }) => {
    return {
        user: users[answer.user_id]
    };
};

export default connect(mapStateToProps)(Answer);
