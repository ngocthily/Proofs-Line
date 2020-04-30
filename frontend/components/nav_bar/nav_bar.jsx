import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h2> {currentUser.username} </h2>
            <button onClick = {logout}>log out</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign up</Link>
            <Link to='/login'>Log in</Link>
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