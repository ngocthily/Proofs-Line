import React from 'react';
import QuestionItem from './question_item';
import CreateQuestionFormContainer from './question_form_container';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.routeToAsk = this.routeToAsk.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }

    routeToAsk() {
        let path = `/questions/ask`;
        this.props.history.push(path);
    }

    render() {
        // const questions = this.props;
        return (
        <div className = "questions">
            <h3 className = "question-header">All Questions</h3>
            <button className = "ask-question-button" onClick = {this.routeToAsk}>Ask Question</button>
            <div className = "all-questions">
            {
                this.props.questions.map((question) => (
                    // return (
                        <ul key = {question.id}>
                        <QuestionItem
                        // title={question.title}
                        // body={question.body}
                                question = {question}
                                // key = {question.id}
                        />
                        </ul>
                    // )
                ))
            }
            </div>
            {/* <CreateQuestionFormContainer/> */}
        </div>
        )
    }
}

export default QuestionIndex;