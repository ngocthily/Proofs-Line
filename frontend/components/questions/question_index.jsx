import React from 'react';
import QuestionItem from './question_index';

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
            <ul>
            {
                this.props.questions.map(question => {
                    <QuestionItem
                    // title={question.title}
                    // body={question.body}
                            question = {question}
                            key={question.id}
                    />
                })
            }
            </ul>
        </div>
        )
    }
}

export default QuestionIndex;