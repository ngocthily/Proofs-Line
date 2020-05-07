import React from 'react';
import { connect } from 'react-redux';

const Answer = ({ answer, author }) => {
    const { body } = answer;
    return (
        <div>
            <ul>
                <li> {body} </li>
                <li> answered {author.username} </li>
            </ul>
        </div>
    )
};

const mapStateToProps = ({entities: {users}}, { answer }) => {
    return {
        author: users[answer.user_id]
    }   
};

export default connect(mapStateToProps)(Answer);