import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    function dropdownChange() {
            $('.dropdown-icon').toggleClass('active');
    }

    return (
    <div className="nav-bar-container">
        <div className="nav-bar-header">
            <div className="dropdown">
                <label className="dropdown-items">
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
                        </div>
                        </div>
                    </div>
                </label>
            </div>
            <div className="home-logo">
                <Link to="/">
                    <img className="home-logo-img" src={window.logo} />
                </Link>
            </div>
        </div>
        <div className="nav-bar-buttons">
            <div className="search-img">
                <i className="fas fa-search"></i>
            </div>
            <input className="search-bar" type="text" placeholder="Search..(coming)"></input>
            <div>
                <Link to='/login'><button type="button" className="btn-login">Log in</button></Link>
                <Link to='/signup'><button type="button" className="btn-signup">Sign up</button></Link>
            </div>
        </div>
    </div>
    )
}