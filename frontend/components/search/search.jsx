import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Note from '../note/note';
import Footer from '../footer/footer';
import ReactHtmlParser from 'react-html-parser';
import ReactPaginate from 'react-paginate';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchFor: '',
            questionsThatContain: [],
            searched: false,
            currentPage: 1,
            questionsPerPage: 15
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.find = this.find.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        this.routeToAsk = this.routeToAsk.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
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

    handlePageClick(e) {
        this.setState({
            currentPage: e.selected + 1
        });
        window.scrollTo(0, 0);
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

        const count = (this.state.questionsThatContain.length !== 0) ?
            (this.state.questionsThatContain.length) :
            (this.state.searched && this.state.searchFor) ? 
                (this.props.questions.filter(question => 
                    (question.title.includes(this.state.searchFor) ||
                    question.body.includes(this.state.searchFor))
                ).length) : null;
        
        // for questions on search age
        const indexOfLastQuestion = this.state.currentPage * this.state.questionsPerPage;
        const indexOfFirstQuestion = indexOfLastQuestion - this.state.questionsPerPage;
        const currentQuestionsForSearchPage = this.state.questionsThatContain.slice(indexOfFirstQuestion, indexOfLastQuestion);
        
        // for questions through search bar
        const currentQuestionsForSearchBar = this.props.questions.filter(question => 
            (question.title.includes(this.state.searchFor) ||
            question.body.includes(this.state.searchFor))).slice(indexOfFirstQuestion,indexOfLastQuestion);
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
                            <div className="search-questions-count">
                                {count ? 
                                (`${count} results`):
                                null}
                            </div>
                        </div>
                        <div className="search-results">
                            {(this.state.questionsThatContain.length !== 0) ? (
                            <div>
                                {currentQuestionsForSearchPage.map((question,idx) => (
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
                                            <div className="search-time-author-container">
                                                <p>{timeAgo(question.secs)} by&nbsp;</p>
                                                <p className="search-author">{question.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>)
                            : (this.state.searched && this.state.searchFor) ? 
                                (<div> {currentQuestionsForSearchBar.map((question,idx) => (
                                    <div key={idx}>
                                        <div className="searchbar-ind-question">
                                            <div className="searchbar-vote-answer-container">
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
                                            <div className="searchbar-question-title-body-wrapper">
                                                <Link to={`questions/${question.id}`} className="search-question-title">
                                                    {question.title}
                                                </Link>
                                                <div className="search-question-body">
                                                    {ReactHtmlParser(question.body)}
                                                </div>
                                                <div className="search-time-author-container">
                                                    <p>{timeAgo(question.secs)} by&nbsp;</p>
                                                    <p className="search-author">{question.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            ))} </div>) : null }
                        </div>
                        {count ? 
                        (<div className="page-numbers">
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={Math.ceil(count / 15)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active'}
                            />
                        </div>) : null}
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