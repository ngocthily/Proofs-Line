import { connect } from 'react-redux';

import { fetchQuestion, createAnswer } from '../../actions/questions_actions';
import AnswerForm from './answer_form';

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = selectQuestion(state.entities, questionId);
    return {
        answer: {
            body: '',
            user_id: state.session.id,
            question_id: questionId
        },
        questionId,
        question
    }
};

const mapDispatchToProps = dispatch => ({
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);