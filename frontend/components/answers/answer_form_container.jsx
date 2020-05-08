import { connect } from 'react-redux';

import { createAnswer } from '../../actions/questions_actions';
import AnswerForm from './answer_form';

const mapStateToProps = ({errors, session}) => {
    // const questionId = parseInt(ownProps.match.params.questionId);
    // const question = selectQuestion(state.entities, questionId);
    // // debugger
    return {
        answer: {
            body: '',
            user_id: session.id
        },
        // questionId,
        // question
        errors: errors.answer
    }
};

const mapDispatchToProps = dispatch => ({
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    // fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);