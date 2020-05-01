import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            {/* current user has no username, just id so no username shows up
            will edit later to do what stack overflow does 
            also logout will be in a dropdown eventually...*/}
            <h2> {currentUser.username} </h2>
            <button onClick = {logout}>Log out</button>
        </div>
    ) : (
        <div>
            <Link to='/login'><button type="button" className="btn-login">Log in</button></Link>
            <Link to='/signup'><button type="button" className="btn-signup">Sign up</button></Link>
        </div>
    );

    return (
        <div className = "nav-bar-container">
            <div className = "nav-bar-header">
                <div className = "for-word-proofs">
                    proofs 
                </div>
                <div className = "for-word-line">
                    line 
                </div>
            </div>
            <div className = "nav-bar-buttons">
                {display}
            </div>
        </div>
    )
}