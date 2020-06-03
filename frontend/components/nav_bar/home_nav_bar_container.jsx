import React from 'react';
import { connect } from 'react-redux';
import HomeNavBar from './home_nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavBar);