import React from 'react';
import HomeNavBarContainer from '../nav_bar/home_nav_bar_container';
import Footer from '../footer/footer';
import ReactQuill from 'react-quill';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeToIndQuestion = this.routeToIndQuestion.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(value, delta, source, editor) {
        this.setState({ body: editor.getHTML()})
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
                    <div className="home-page-nav-bar">
                        <HomeNavBarContainer/>
                    </div>
                    <div className="ask-question-midsection">
                        <div className = "question-form">
                            <div className="question-header-robot-wrapper">
                                <h1 className="ask-question-header">Ask a public question</h1>
                                <img className="question-robot" src={window.robot_question}/>
                            </div>
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
                                        <ReactQuill
                                            value={this.state.body}
                                            onChange={this.handleChange}
                                        />
                                        {/* <textarea
                                            cols="105"
                                            rows = "10"
                                            value = {this.state.body}
                                            onChange={this.handleInput('body')}
                                        /> */}
                                            {this.renderErrors()}
                                        <br/>
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
                        <div className="ask-question-directions">
                            <div className="ask-question-step1">
                                <h4>Step 1: Draft your question</h4>
                            </div>
                            <div className="ask-question-bottom">
                                <div className="ask-question-directions-description">
                                    <p>The community is here to help you with specific</p>
                                    <p>proving, algorithm, or logic problems.</p>
                                </div>
                                <div className="avoid-tip">
                                    <p>Avoid asking opinion-based questions.</p>
                                </div>
                                <div className="ask-question-steps">
                                    <h4>1. Summarize the problem</h4>
                                    <h4>2. Describe what you've tried</h4>
                                    <h4>3. Show some work</h4>
                                </div>
                            </div>
                        </div>
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