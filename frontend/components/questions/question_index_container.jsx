import React from 'react';
import QuestionIndex from './question_index';
import { fetchQuestions } from '../../actions/questions_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    questions: Object.keys(state.entities.questions).map(key => state.entities.questions[key])
});

const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);