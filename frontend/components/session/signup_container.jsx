import { connect } from 'react-redux';
import { createUser } from '../../actions/session';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
    };
};

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);