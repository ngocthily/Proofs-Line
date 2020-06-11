import React from 'react';
import { connect } from 'react-redux';

const Answer = ({ answer, user }) => {
    const { body, created_at} = answer;
    return (
        <div className="answer-section" >
            <ul>
                <li className="answer-to-q">
                    <p>
                        {body}
                    </p>
                    <p className="answer-date">
                        Asked on {created_at ? created_at.substring(0, 10) : null}
                    </p>
                    <p className="answer-author">
                        By {user.username}
                    </p>
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
