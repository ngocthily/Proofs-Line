import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login'
    };
};

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);