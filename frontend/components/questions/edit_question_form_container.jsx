import React from 'react';
import { connect } from 'react-redux';

import { selectQuestion } from '../../reducers/selectors';
import QuestionForm from './question_form';
import { fetchQuestion, updateQuestion, clearQuestionErrors } from '../../actions/questions_actions';

const mapStateToProps = (state, ownProps) => {
    const questionId = parseInt(ownProps.match.params.questionId);
    const question = selectQuestion(state.entities, questionId);
    return {
    question: {
        id: question.id,
        title: question.title,
        body: question.body,
        authorId: question.author_id
    },
    questionId,
    errors: state.errors.question,
    formType: 'Update question'
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    action: (question) => dispatch(updateQuestion(question)),
    clearQuestionErrors: () => dispatch(clearQuestionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);