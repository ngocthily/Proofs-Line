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
                                        <Link to={`questions/${question.id}`} className="search-question-title">
                                            {question.title}
                                        </Link>
                                        <div className="search-question-body">
                                            {ReactHtmlParser(question.body)}
                                        </div>
                                    </div>
                                ))}
                            </div>)
                            : (this.state.searched && this.state.searchFor) ? 
                                (<div> {this.props.questions.map((question,idx) => (
                                <div key={idx} className="search-ind-question">
                                    {(question.title.includes(this.state.searchFor)) ?
                                    (<div>
                                        <Link to={`questions/${question.id}`} className="search-question-title">
                                            {question.title}
                                        </Link>
                                        <div className="search-question-body">
                                            {ReactHtmlParser(question.body)}
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