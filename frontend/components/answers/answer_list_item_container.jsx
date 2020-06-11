import React from 'react';
import { connect } from 'react-redux';

const Answer = ({ answer, user }) => {
    const { body, created_at} = answer;
    return (
        <div>
            <ul>
                <li>{body}</li>
                <li>{created_at ? created_at.substring(0, 10) : null}</li>
                <li>{user.username}</li>
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
