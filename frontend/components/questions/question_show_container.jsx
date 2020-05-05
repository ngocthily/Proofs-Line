import { connect } from 'react-redux';

import { fetchQuestion } from '../../actions/questions_actions';
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = state.entities.questions[questionId] || {};
    return {
        questionId,
        question
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchQuestion: questionId => dispatch(fetchQuestion(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);