import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
            <div className="main-navbar-logout-btn-container">
                {/* current user has no username, just id so no username shows up
                will edit later to do what stack overflow does 
                also logout will be in a dropdown eventually...*/}
                {/* <h2> {currentUser.username} </h2> */}
                <button className="navbar-logout-btn" onClick={logout}>Log out</button>
            </div>
        ) : (
            <div className="navbar-login-signup-wrapper">
                <Link to='/login'><button type="button" className="main-btn-login">Log in</button></Link>
                <Link to='/signup'><button type="button" className="main-btn-signup">Sign up</button></Link>
            </div>
        );
    return (
        <div className="main-nav-bar-container-wrapper">
            <div className = "main-nav-bar-container">
                <div className = "main-navbar-logo">
                    <Link to="/">
                        <img className="navbar-home-logo" src={window.logo} />
                    </Link>
                </div>
                <div className = "main-nav-bar-buttons">
                        {display}
                </div>
            </div>
        </div>
    )
}