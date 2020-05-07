import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId);
    }

    handleDelete() {
        this.props.deleteQuestion(this.props.questionId);
    }

    render() {
        const { question, currentUserId, authorId } = this.props;
        const editLink = (currentUserId === authorId) ? 
            <div>
                <Link to={`/questions/${question.id}/edit`}>Edit</Link> 
                <br/>
                <Link to= {'/questions'} onClick = {this.handleDelete}>Delete</Link>
            </div> 
            :
            <div>
                <form>
                    {/* need to edit once done with answers */}
                    <label>Your Answer</label>
                    <br/>
                    <textarea
                        cols="50"
                        rows="10"
                    />
                </form>
                <br/>
                <button className = "answer-btn">Post Your Answer</button>
            </div>
        return (
            <div className = "ind-question-page">
                <p>{question.title}</p>
                <p>{question.body}</p>
                {editLink}
            </div>
        )
    }
}

export default QuestionShow;