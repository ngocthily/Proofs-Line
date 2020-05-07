import { connect } from 'react-redux';

import { createAnswer } from '../../actions/questions_actions';
import AnswerForm from './answer_form';

const mapDispatchToProps = dispatch => ({
    createAnswer: (answer) => dispatch(createAnswer(answer))
});

export default connect(null, mapDispatchToProps)(AnswerForm);