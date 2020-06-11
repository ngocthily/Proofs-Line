import { connect } from 'react-redux';

import { fetchQuestions } from '../../actions/questions_actions';
import Note from './note';

const mapStateToProps = (state) => ({
    questions: Object.values(state.entities.questions)
});

export default connect(mapStateToProps, null)(Note);

