import { connect } from 'react-redux';

import { fetchAnswers } from '../../actions/answers_actions';
import AnswerIndex from './answer_index';

const mapStateToProps = (state) => ({
    answers: Object.values(state.entities.answers)
})

const mapDispatchToProps = dispatch => ({
    fetchAnswers: (questionId) => dispatch(fetchAnswers(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);