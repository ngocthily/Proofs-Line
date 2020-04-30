import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h2> {currentUser.username} </h2>
            <button onClick = {logout}>Log out</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'><button type="button">Sign up</button></Link>
            <Link to='/login'><button type="button">Log in</button></Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <div>
                {display}
            </div>
        </header>
    )
}