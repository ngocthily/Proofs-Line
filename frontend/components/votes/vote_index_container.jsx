import React from 'react';
import { connect } from 'react-redux';

const Vote = ({ vote }) => {
    return (
        <div>
            {vote.id}
        </div>
    )
};

const mapStateToProps = ( {entities: { users }}, { vote }) => {
    return {
        user: users[vote.id]
    }
};

export default connect(mapStateToProps)(Vote);