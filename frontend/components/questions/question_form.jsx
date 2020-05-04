import React from 'react';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createQuestion(this.state);
    }

    handleInput(type) {
        return (e) => {this.setState({ [type]: e.currentTarget.value})};
    } 

    render() {
        <div className = "question-form">
            <form onSubmit = {this.handleSubmit}>
                <label>Title</label>
                <br/>
                <input 
                    type = "text"
                    value = {this.state.title}
                    onChange={this.handleInput('title')}
                />
                <br/>
                <label>Body</label>
                <br/>
                <textarea
                    cols="30"
                    rows = "10"
                    value = {this.state.body}
                    onChange = {this.handleInput('body')}
                />
                <button type = "submit">Post your question</button>
            </form>
        </div>
    }
}

export default QuestionForm;