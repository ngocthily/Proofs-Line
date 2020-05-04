import React from 'react';
import QuestionItem from './question_item';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        // const questions = this.props;
        return (
        <div className = "questions">
            <h3 className = "question-header">All Questions</h3>
            <button className = "ask-question-button">Ask Question</button>
            <div className = "all-questions">
            {
                this.props.questions.map((question) => (
                    // return (
                    <ul>
                        <QuestionItem
                        // title={question.title}
                        // body={question.body}
                                question = {question}
                                key={question.id}
                        />
                    </ul>
                    // )
                ))
            }
            </div>
        </div>
        )
    }
}

export default QuestionIndex;