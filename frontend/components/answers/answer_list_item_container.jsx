import React from 'react';
import { connect } from 'react-redux';

const Answer = ({ answer }) => {
    const { body, created_at, user } = answer;
    return (
        <div>
            <ul>
                <li>{body}</li>
                <li>{created_at ? created_at.substring(0, 10) : null}</li>
                <li>{user}</li>
            </ul>
        </div>
    );
};

const mapStateToProps = ({ entities: { users } }, { answer }) => {
    return {
        author: users[answer.author_id]
    };
};

export default connect(mapStateToProps)(Answer);
