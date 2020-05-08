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
                <AnswerFormContainer />
            </div>
        const count = this.props.question.answers ?
                        <div className = "amt-of-answers-per-q">{this.props.question.answers.length} Answers</div> :
                        <div className="amt-of-answers-per-q"> 0 Answers</div>
        return (
            <div className = "ind-question-page">
                <div className = "ind-first-line">
                    <p className = 'ind-question-title'>{question.title}</p>
                    <button className="ask-question-button" onClick = {this.routeToAsk}>Ask Question</button>
                </div>
                <p className = 'ind-question-body'>{question.body}</p>
                {count}
                <div>
                    {this.props.question.answers ? 
                    (  
                        <ul className = "answer-section">
                            <div className = "up-down">
                                <i class="fas fa-caret-up fa-4x"></i>
                                <i class="fas fa-caret-down fa-4x"></i>
                            </div>
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
                {editLink}
            </div>
        )
    }
}

export default QuestionShow;