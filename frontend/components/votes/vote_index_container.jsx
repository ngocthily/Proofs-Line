import { connect } from 'react-redux';

import { fetchAnswers } from '../../actions/answers_actions';
import { createVote, deleteVote } from '../../actions/votes_actions';
import VoteIndex from './vote_index';

const mapStateToProps = (state) => {
    const answers = Object.keys(state.entities.answers).map(key => state.entities.answers[key])
    const currentUserId = state.session.id
    return {
        answers,
        currentUserId
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchAnswers: (questionId) => dispatch(fetchAnswers(questionId)),
    createVote: (id) => dispatch(createVote(id)),
    deleteVote: (id) => dispatch(deleteVote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteIndex);