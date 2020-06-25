import React from 'react';
import { Link } from 'react-router-dom';

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
    }

    componentDidMount() {
        this.props.fetchQuestions();
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
        this.find();
        this.setState({
            questionsThatContain: this.state.questionsThatContain
        });
    }

    handleInput(type) {
        return (e) => { this.setState({ [type]: e.currentTarget.value }) };
    } 

    render() {
        return (
            <div>
                <div className="search-section">
                    <div className="search-header">
                        Search
                    </div>
                        <input 
                            type="text" 
                            value={this.state.searchFor}
                            onChange={this.handleInput('searchFor')}
                        />
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
                                        {question.body}
                                    </div>
                                </div>
                            ))}
                        </div>)
                            : (<div> No </div>) }
                    </div>
            </div>
        )
    }
}

export default Search;