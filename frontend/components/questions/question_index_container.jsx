import React from 'react';
import { fetchQuestions } from '../../actions/questions_actions';
import { connect } from 'react-redux';
import QuestionIndex from './question_index';

const mapStateToProps = (state) => ({
    questions: Object.values(state.entities.questions)
});

const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);