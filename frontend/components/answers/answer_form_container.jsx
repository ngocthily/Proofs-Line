import { connect } from 'react-redux';

import { createAnswer, clearAnswerErrors } from '../../actions/answers_actions';
import AnswerForm from './answer_form';

const mapStateToProps = ({errors, session}) => {
    return {
        answer: {
            body: '',
            user_id: session.id
        },
        errors: errors.answer
    }
};

const mapDispatchToProps = dispatch => ({
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    clearAnswerErrors: () => dispatch(clearAnswerErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);