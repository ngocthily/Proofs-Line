import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.routeToAsk = this.routeToAsk.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId);
    }

    handleDelete() {
        this.props.deleteQuestion(this.props.questionId);
    }


    routeToAsk() {
        this.props.history.push(`/questions/new`);
    }

    render() {
        const { question, currentUserId, authorId } = this.props;
        const editLink = (currentUserId === authorId) ? 
            <div>
                <Link to={`/questions/${question.id}/edit`}>Edit</Link> 
                <br/>
                <Link to="/questions" onClick = {this.handleDelete}>Delete</Link>
            </div> 
            :
            <div className = "answer-response">
                {/* <form>
                    <label>Your Answer</label>
                    <br/>
                    <textarea
                        cols="50"
                        rows="10"
                    />
                </form>
                <br/> */}
                {/* <br/>
                <button className = "answer-btn">Post Your Answer</button> */}
                <AnswerFormContainer />
            </div>

        return (
            <div className = "ind-question-page">
                <div className = "ind-first-line">
                    <p className = 'ind-question-title'>{question.title}</p>
                    <button className="ask-question-button" onClick = {this.routeToAsk}>Ask Question</button>
                </div>
                <p className = 'ind-question-body'>{question.body}</p>
                {editLink}
                <div>
                    {this.props.question.answers ? 
                    (
                        <ul>
                            {this.props.question.answers.map((answer) => (
                                <div key = {answer.id}>
                                    <li className = "answer-to-q">
                                        {answer.body}
                                    </li>
                                </div>
                            ))}
                        </ul>
                    ) : null }
                </div>
            </div>
        )
    }
}

export default QuestionShow;