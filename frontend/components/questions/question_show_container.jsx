import { connect } from 'react-redux';

import { 
    fetchQuestion, 
    deleteQuestion } from '../../actions/questions_actions';
import { fetchAnswers } from '../../actions/answers_actions';
import { selectQuestion, selectAnswersForQuestion } from '../../reducers/selectors';
import QuestionShow from './question_show';

const mapStateToProps = (state, { match }) => {
    const questionId = parseInt(match.params.questionId);
    const question = selectQuestion(state.entities, questionId);
    const answers = selectAnswersForQuestion(state.entities, question);
    const currentUserId = state.session.id;
    return {
        questionId,
        question,
        currentUserId,
        authorId: question.author_id,
        answers
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);