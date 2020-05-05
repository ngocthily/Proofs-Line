import React from 'react';
import { connect } from 'react-redux';

import { createQuestion } from '../../actions/questions_actions';
import QuestionForm from './question_form';

const mapStateToProps = (state) => {
    return {
        question: {
            title: '',
            body: '',
            author_id: state.session.id
        }
    }
};

const mapDispatchToProps = (dispatch) => ({
    createQuestion: question => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
