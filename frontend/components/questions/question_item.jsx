import React from 'react';

export default ( {question} ) => {
    return ( 
        <li>
            <h3>{question.title}</h3>
            <h3>{question.body}</h3>
        </li>
    )
}

