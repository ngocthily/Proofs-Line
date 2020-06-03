import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="nav-bar-container">
        <div className="nav-bar-header">
            <div className='dropdown'>
                <label className="dropdown-items">
                    <button className='dropbtn'>
                        <i className="fas fa-bars fa-sm"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/">
                            <p className="dropdown-home">Home</p>
                        </Link>
                        <p className="dropdown-public">PUBLIC</p>
                        <Link to="/questions">
                            <p className="dropdown-questions">Questions</p>
                        </Link>
                    </div>
                </label>
            </div>
            <Link to="/">
                <img className="home-logo" src={window.logo} />
            </Link>
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