import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
            <div className="navbar-logout-btn-container">
                {/* current user has no username, just id so no username shows up
                will edit later to do what stack overflow does 
                also logout will be in a dropdown eventually...*/}
                {/* <h2> {currentUser.username} </h2> */}
                <button className="navbar-logout-btn" onClick={logout}>Log out</button>
            </div>
        ) : (
            <div>
                <Link to='/login'><button type="button" className="btn-login">Log in</button></Link>
                <Link to='/signup'><button type="button" className="btn-signup">Sign up</button></Link>
            </div>
        );
    return (
        <div className = "nav-bar-container">
            <div className = "main-navbar-logo">
                {/* edit to show dropdown bar only on home page */}
                <Link to = "/">
                    <img className="navbar-home-logo" src={window.logo} />
                </Link>
            </div>
            <div className = "nav-bar-buttons">
                <div className = "search-img">
                    <i className="fas fa-search"></i>
                </div>
                <input className="search-bar" type="text" placeholder="Search..(coming)"></input>
                    {display}
            </div>
        </div>
    )
}