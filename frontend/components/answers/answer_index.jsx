import React from 'react';
import AnswerListItemContainer from './answer_list_item_container';

class AnswerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchAnswers(this.props.match.params.questionId);
        // console.log(this.props)
    }

    render() {
        // const answerList = (answers) => (
        //     answers.map(answer => (
        //         <AnswerListItemContainer
        //             answer={answer}
        //             key={answer.id}
        //         />
        //     ))
        // );
        return(
            <div>
                {/* <AnswerListItemContainer/> */}
            </div>
        )
    }
}

export default AnswerIndex;