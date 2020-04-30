import { connect } from 'react-redux';
import { createUser, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);