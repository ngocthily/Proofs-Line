import React from 'react';
import { Redirect } from 'react-router';

class SearchNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFor: '',
            redirect: false
        };
        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(e) {
        if (event.key === "Enter") {
            this.setState({
                searchFor: e.target.value,
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                    pathname: '/search',
                    state: {searchFor: this.state.searchFor}}}/>;
        }

        return (
            <input 
                type="text"
                onKeyPress={this.keyPressed}
            />
        )
    }
}

export default SearchNav;