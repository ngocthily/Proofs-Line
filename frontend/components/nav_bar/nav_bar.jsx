import React from 'react';
import { Link } from 'react-router-dom';
import SearchNav from '../search/search_nav';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
            <div className="main-navbar-logout-btn-container">
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
                    <div className="main-navbar-searchbar">
                        <SearchNav/>
                    </div>
                    <div>
                        {display}
                    </div>
                </div>
            </div>
        </div>
    )
}