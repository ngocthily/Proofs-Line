import { connect } from 'react-redux';

import { fetchQuestion, deleteQuestion } from '../../actions/questions_actions';
import { selectQuestion } from '../../reducers/selectors';
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = selectQuestion(state.entities, questionId);
    return {
        questionId,
        question,
        currentUserId: state.session.id,
        authorId: question.author_id
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);