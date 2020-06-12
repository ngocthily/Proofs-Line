import { connect } from 'react-dom';

import { fetchAnswers } from '../../actions/answers_actions';
import VoteIndex from './vote_index';

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = selectQuestion(state.entities, questionId);
    const answers = selectAnswersForQuestion(state.entities, question);
    return {
        question,
        answers
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchAnswers: (questionId) => dispatch(fetchAnswers(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteIndex);