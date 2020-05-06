import React from 'react';
import { connect } from 'react-redux';

import { createQuestion, clearQuestionErrors } from '../../actions/questions_actions';
import QuestionForm from './question_form';

const mapStateToProps = ( {errors, session}) => ({
        question: {
            title: '',
            body: '',
            author_id: session.id
        },
        errors: errors.question,
        formType: 'Post your question'
});

const mapDispatchToProps = (dispatch) => ({
    action: (question) => dispatch(createQuestion(question)),
    clearQuestionErrors: () => dispatch(clearQuestionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
