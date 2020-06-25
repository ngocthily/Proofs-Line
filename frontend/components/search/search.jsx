import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import ReactHtmlParser from 'react-html-parser';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchFor: '',
            questionsThatContain: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.find = this.find.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
        window.scrollTo(0, 0);

        if (this.props.location.state) {
            this.setState({
                searchFor: this.props.location.state.searchFor
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

    render() {
        return (
            <div>
                <div>
                    <NavBarContainer/>
                </div>
                <div className="search-sidebar">
                    <Sidebar/>
                </div>
                <div>
                    <div className="search-section-container">
                        <div className="search-section">
                            <div className="search-header">
                                Search
                            </div>
                            <div className="main-searchbar-container">
                                <input 
                                    className="main-searchbar"
                                    type="text" 
                                    value={this.state.searchFor}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </div>
                            <button className="search-btn" onClick={this.handleSubmit}>Search</button>
                        </div>
                        <div className="search-results">
                            results
                            {(this.state.questionsThatContain.length !== 0) ? (
                            <div>
                                {this.state.questionsThatContain.map((question,idx) => (
                                    <div key={idx}>
                                        <Link to={`questions/${question.id}`}>
                                            {question.title}
                                        </Link>
                                        <div>
                                            {ReactHtmlParser(question.body)}
                                        </div>
                                    </div>
                                ))}
                            </div>)
                            : (this.state.searchFor) ? 
                                (<div> {this.props.questions.map((question,idx) => (
                                <div key={idx}>
                                    {(question.title.includes(this.state.searchFor)) ?
                                    (<div>
                                        <div>
                                            {question.title}
                                        </div>
                                        <div>
                                            {question.body}
                                        </div>
                                    </div>) : null}
                                </div>
                            ))} </div>) : null }
                        </div>
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