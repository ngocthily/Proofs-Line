import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    function dropdownChange() {
            $('.dropdown-icon').toggleClass('active');
    }
    
    const display = currentUser ? (
        <div className="navbar-logout-btn-container">
            {/* current user has no username, just id so no username shows up
                will edit later to do what stack overflow does 
                also logout will be in a dropdown eventually...*/}
            {/* <h2> {currentUser.username} </h2> */}
            <button className="navbar-logout-btn" onClick={logout}>Log out</button>
        </div>
    ) : (
            <div className="login-signup-btns">
                <Link to='/login'><button type="button" className="btn-login">Log in</button></Link>
                <Link to='/signup'><button type="button" className="btn-signup">Sign up</button></Link>
            </div>
        );

    return (
    <div className="home-nav-bar-container-wrapper">
        <div className="nav-bar-container">
            <div className="nav-bar-header">
                <div className="dropdown">
                    <div className="dropdown-items">
                        <div className="dropdown-icon" onClick={dropdownChange}>
                            <div className="x-icon">
                            <div className="dropdown-content">
                                <p></p>
                                <div className ="dropdown-home">
                                    <Link to="/" className="dropdown-home-link">
                                        <p className="home-word">Home</p>
                                    </Link>
                                </div>
                                <p className="dropdown-public">PUBLIC</p>
                                <div className="dropdown-question">
                                    <Link to="/questions" className="dropdown-question-link">
                                        <p className="dropdown-questions-word">Questions</p>
                                    </Link>
                                </div>
                                <div className="dropdown-jobs">
                                    <Link to="/jobs" className="dropdown-jobs-link">
                                        <p className="dropdown-jobs-word">Jobs</p>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-logo">
                    <Link to="/">
                        <img className="home-logo-img" src={window.logo} />
                    </Link>
                </div>
            </div>
            {/* <div className="space1"></div>
            <div className="space2"></div> */}
            {/* <div className="nav-bar-buttons-wrapper"> */}
            <div className="nav-bar-buttons">
                {/* <div className="search-img">
                    <i className="fas fa-search"></i>
                </div>
                    <input className="search-bar" type="text" placeholder="Search..(coming)"></input> */}
                <div>
                    {/* <Link to='/login'><button type="button" className="btn-login">Log in</button></Link>
                    <Link to='/signup'><button type="button" className="btn-signup">Sign up</button></Link> */}
                    {display}
                </div>
            {/* </div> */}
            </div>
        </div>
    </div>
    )
}