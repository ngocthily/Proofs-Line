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
        const { questions } = this.props;
        return (
            <div>
                <ul>
                    {
                        questions.map(question => (
                            <QuestionItem
                            question = {question}
                            key = {question.id}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default QuestionIndex;