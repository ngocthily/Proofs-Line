import { connect } from 'react-redux';
import { createUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(createUser(user)),
});

export default connect(null, mapDispatchToProps)(Signup);