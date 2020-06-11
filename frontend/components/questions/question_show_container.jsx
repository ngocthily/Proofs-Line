import { connect } from 'react-redux';

import { 
    fetchQuestion, 
    deleteQuestion } from '../../actions/questions_actions';
import { createVote } from '../../actions/votes_actions';
import { selectQuestion, selectAnswersForQuestion } from '../../reducers/selectors';
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = selectQuestion(state.entities, questionId);
    const answers = selectAnswersForQuestion(state.entities, question);
    return {
        questionId,
        question,
        currentUserId: state.session.id,
        authorId: question.author_id,
        answers
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId))
    // createVote: (vote) => dispatch(createVote(vote))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);