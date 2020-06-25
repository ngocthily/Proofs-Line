import { connect } from 'react-redux';

import Search from './search';
import { fetchQuestions } from '../../actions/questions_actions';

const mapStateToProps = (state) => ({
    questions: Object.values(state.entities.questions)
});

const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);