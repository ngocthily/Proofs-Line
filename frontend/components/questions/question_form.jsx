import React from 'react';
// import { withRouter } from 'react-router';
import HomeNavBarContainer from '../nav_bar/home_nav_bar_container';
import Footer from '../footer/footer';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeToIndQuestion = this.routeToIndQuestion.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then((question) => this.routeToIndQuestion(question));
    }

    componentWillUnmount() {
        this.props.clearQuestionErrors();
    }
    
    handleInput(type) {
        return (e) => {this.setState({ [type]: e.currentTarget.value})};
    } 

    routeToIndQuestion(question) {
        this.props.history.push(`/questions/${question.question.id}`);
    }

    renderErrors() {
        return(
            <ul className = "question-errors">
                {this.props.errors.map((error,i) => (
                    <li key ={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div className="new-question-page">
                    <HomeNavBarContainer/>
                    <div className = "question-form">
                        <h1 className="ask-question-header">Ask a public question</h1>
                        <form onSubmit = {this.handleSubmit}>
                            <div className="ask-question-form">
                                <div className="ask-question-form-title">
                                    <label>Title</label>
                                    <p>Be specific and imagine you’re asking a question to another person</p>
                                    <input
                                        className="ask-question-title-textbox"
                                        type = "text"
                                        value = {this.state.title}
                                        onChange={this.handleInput('title')}
                                        placeholder="e.g. How do you know that perpendicular bisectors of a triangle are going to meet?"
                                    />
                                    <br/>
                                </div>
                                <div className="ask-question-form-body">
                                    <label>Body</label>
                                    <p>Include all the information someone would need to answer your question</p>
                                    <textarea
                                        cols="105"
                                        rows = "10"
                                        value = {this.state.body}
                                        onChange={this.handleInput('body')}
                                    />
                                        {this.renderErrors()}
                                    <br/>
                                </div>
                                <div className="ask-question-form-tags">
                                    <label>Tags (Coming soon)</label>
                                </div>
                            </div>
                                <div className="post-question-btn-container">
                                    <br />
                                    <input
                                        className="post-question-btn"
                                        type= "submit" 
                                        value = {this.props.formType}
                                    />
                                </div>
                        </form>
                    </div>
                </div>
                <div className="ask-question-footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default QuestionForm;