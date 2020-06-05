import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Note from '../note/note';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvote: null,
            downvote: null
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.routeToAsk = this.routeToAsk.bind(this);

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
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

    upvote(e, id) {
        e.preventDefault();
        const vote = {
            vote_type: "upvote",
            post_type: "answer",
            answer_id: id,
            post_id: id
        }
        this.props.createVote(vote);
        this.setState({
            upvote: true,
            downvote: false
        });
        // $('.answer-up').toggleClass('active');
    }

    downvote(e, id) {
        e.preventDefault();
        const vote = {
            vote_type: "downvote",
            post_type: "answer",
            answer_id: id,
            post_id: id
        }
        this.props.createVote(vote);
        this.setState({
            upvote: false,
            downvote: true
        });
        // $('.answer-down').toggleClass('active');
    }

    voteCount(answer) {
        return ((answer.votes.filter(vote => vote.vote_type === "upvote").length
                - answer.votes.filter(vote => vote.vote_type === "downvote").length))
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
        const count = this.props.question.answers ?
                        (<div className = "amt-of-answers-per-q">{this.props.question.answers.length} Answers</div> ):
                        (<div className="amt-of-answers-per-q"> 0 Answers</div>)
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
                            {this.props.question.answers ? 
                            (  
                                <ul>
                                    <div className = "whole-answer-section">
                                    {this.props.question.answers.map((answer, idx) => (
                                        <div className = "answer-section" key = {idx}>
                                        <div className = "up-down">
                                            <div className="answer-up" onClick={(e) => this.upvote(e, answer.id)}
                                            >
                                                <i className="fas fa-caret-up fa-4x"></i>
                                            <div className="vote-count">
                                                {/* {this.voteCount(answer)} */}
                                                {this.state.upvote ? this.voteCount(answer) + 1 : 
                                                this.state.downvote ? this.voteCount(answer) - 1 : this.voteCount(answer)}
                                            </div>
                                            </div>
                                            <div className="answer-down" onClick={(e) => this.downvote(e, answer.id)}>
                                                <i className="fas fa-caret-down fa-4x"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <li className = "answer-to-q">
                                                <p>{answer.body}</p>
                                                <p className="answer-date">Asked on {answer.created_at.substring(0,10)}</p>
                                                <p className="answer-author">By {answer.user}</p>
                                            </li>
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                                </ul>
                            ) : null }
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