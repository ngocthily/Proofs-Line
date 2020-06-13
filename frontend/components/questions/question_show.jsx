import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Note from '../note/note';
import AnswerListItem from '../answers/answer_list_item';


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
                <Link to={`/questions/${question.id}/edit`}>Edit</Link> &nbsp;
                <Link to="/questions" onClick = {this.handleDelete}>Delete</Link>
            </div> 
            :
            <div className="answer-response">
                <AnswerFormContainer />
            </div>

        const count = this.props.answers ?
                        (<div className = "amt-of-answers-per-q">{this.props.answers.length} Answers</div> ):
                        (<div className="amt-of-answers-per-q"> 0 Answers</div>)

        const answerList = (answers) => (
            answers.map(answer => (
                <AnswerListItem
                    answer={answer}
                    key={answer.id}
                />
            ))
        );

        return (
            <div>
                <div className="ind-question-navbar">
                    <NavBarContainer/>
                </div>
                <div className ="ind-question-midsection">
                    <div className="ind-question-sidebar">
                        <Sidebar/>
                    </div>
                    <div className = "ind-question-page">
                        <div className = "ind-first-line">
                            <div className="ind-question-title-section">
                                <p className = 'ind-question-title'>{question.title}</p>
                                <p>Asked on {question.created_at ? question.created_at.substring(0,10): null}</p>
                            </div>
                            <div>
                            <button className="ask-question-button" onClick = {this.routeToAsk}>Ask Question</button>
                            </div>
                        </div>
                        <div className='ind-question-body'>
                            {question.body} 
                            { (currentUserId === authorId) ? 
                            <div>
                            {editLink}
                            </div> : null}
                        </div>
                        <div className = 'count-answers'>
                            {count}
                        </div>
                        <div>

                        </div>
                        <div className = "whole-answer-section">
                            {this.props.answers ? 
                            (answerList(this.props.answers)): null}
                        </div>
                        {(currentUserId !== authorId) ?
                            <div>
                                {editLink}
                            </div> : null}
                    </div>
                    <div className="ind-question-note">
                        <Note/>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionShow;