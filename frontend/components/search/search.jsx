import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Note from '../note/note';
import Footer from '../footer/footer';
import ReactHtmlParser from 'react-html-parser';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchFor: '',
            questionsThatContain: [],
            searched: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.find = this.find.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        this.routeToAsk = this.routeToAsk.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
        window.scrollTo(0, 0);

        if (this.props.location.state) {
            this.setState({
                searchFor: this.props.location.state.searchFor,
                searched: true
            });
        }
    }

    find() {
        this.props.questions.map(question => {
            ((question.title.includes(this.state.searchFor)) || 
            (question.body.includes(this.state.searchFor)) ) ?
            this.state.questionsThatContain.push(question) :
            null
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.questionsThatContain = [];
        this.find();
        this.setState({
            questionsThatContain: this.state.questionsThatContain
        });
    }

    handleChange(e) {
        this.setState({
            searchFor: e.target.value
        })
    }

    keyPressed(e) {
        if (e.key === "Enter") {
            this.state.questionsThatContain = [];
            this.find();
            this.setState({
                questionsThatContain: this.state.questionsThatContain
            });
        }
    }

    routeToAsk() {
        this.props.history.push(`/questions/new`);
    }

    render() {
        const timeAgo = (secs) => (
            (secs < 60) ?
                `asked ${Math.round(secs)} secs ago` :
            (secs === 60) ?
                `asked 1 min ago` :
            (secs < 3600) ?
                `asked ${Math.round(secs / 60)} mins ago` :
            (secs === 3600) ?
                `asked 1 hour ago` :
            (secs < 86400) ?
                `asked ${Math.round(secs / 3600)} hours ago` :
                `asked ${Math.round(secs / 86400)} days ago`
        );

        const countOfVotes = (questionVotes) => {
            let numOfUpvotes = 0;
            let numOfDownvotes = 0;
            for (let i = 0; i < questionVotes.length; i++) {
                if (questionVotes[i].post_type === "question") {
                    if (questionVotes[i].vote_type === "upvote") {
                        numOfUpvotes += 1;
                    } else if (questionVotes[i].vote_type === "downvote") {
                        numOfDownvotes += 1
                    }
                }
            }
            return numOfUpvotes - numOfDownvotes
        }

        return (
            <div>
                <div>
                    <NavBarContainer/>
                </div>
                <div className="search-sidebar">
                    <Sidebar/>
                </div>
                <div className="search-section-note-wrapper">
                    <div className="search-section-container">
                        <div className="search-section">
                            <div className="search-header-btn-wrapper">
                                <div className="search-header">
                                    Search
                                </div>
                                <div className="search-ask-btn-wrapper">
                                    <button className="search-ask-question-button" onClick={this.routeToAsk}>Ask Question</button>
                                </div>
                            </div>
                            <div className="search-textbox-btn-wrapper">
                                <div className="main-searchbar-container">
                                    <input 
                                        className="main-searchbar"
                                        type="text" 
                                        value={this.state.searchFor}
                                        onChange={(e) => this.handleChange(e)}
                                        onKeyPress={this.keyPressed}
                                    />
                                </div>
                                <button className="search-btn" onClick={this.handleSubmit}>Search</button>
                            </div>
                        </div>
                        <div className="search-results">
                            {(this.state.questionsThatContain.length !== 0) ? (
                            <div>
                                {this.state.questionsThatContain.map((question,idx) => (
                                    <div key={idx} className="search-ind-question">
                                        <div className="search-vote-answer-count">
                                            <div className="search-vote-count-word-container">
                                                <div className="search-vote-count">
                                                    {countOfVotes(question.votes)}
                                                </div>
                                                <div className="search-vote-word">
                                                    votes
                                                </div>
                                            </div>
                                            <div className="search-answer-count-word-container">
                                                <div className="search-answer-count">
                                                    {question.countOfAnswers}
                                                </div>
                                                <div className="search-answer-word">
                                                    answers
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-question-title-body-wrapper">
                                            <Link to={`questions/${question.id}`} className="search-question-title">
                                                {question.title}
                                            </Link>
                                            <div className="search-question-body">
                                                {ReactHtmlParser(question.body)}
                                            </div>
                                            <div>
                                                <p>{timeAgo(question.secs)} by {question.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>)
                            : (this.state.searched && this.state.searchFor) ? 
                                (<div> {this.props.questions.map((question,idx) => (
                                    <div key={idx}>
                                        {(question.title.includes(this.state.searchFor) ||
                                            question.body.includes(this.state.searchFor)) ?
                                        (<div>
                                            <div>
                                                <div>
                                                    <div>
                                                        {countOfVotes(question.votes)}
                                                    </div>
                                                    <div>
                                                        votes
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        {question.countOfAnswers}
                                                    </div>
                                                    <div>
                                                        answers
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link to={`questions/${question.id}`}>
                                                    {question.title}
                                                </Link>
                                                <div>
                                                    {ReactHtmlParser(question.body)}
                                                </div>
                                                <div>
                                                    <p>{timeAgo(question.secs)} by {question.author}</p>
                                                </div>
                                            </div>
                                        </div>) : null}
                                    </div>
                            ))} </div>) : null }
                        </div>
                    </div>
                    <div className="search-note">
                        <Note/>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Search;