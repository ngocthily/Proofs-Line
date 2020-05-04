import React from 'react';

// export default ( {question} ) => {
//     return ( 
//         <li>
//             <h3>{question.title}</h3>
//             <h3>{question.body}</h3>
//         </li>
//     )
// }

const QuestionItem = (props) => {
    return (
        <div>
            <hr className="question-divider"></hr>
            <div className = "question-title">
            {props.question.title}
            </div>
            <div className = "question-body">
                {props.question.body}
            </div>
            {/* <hr className = "question-divider"></hr> */}
        </div>
    )
}

export default QuestionItem;