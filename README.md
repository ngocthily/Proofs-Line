# <img src="https://github.com/ngocthily/Proofs-Line/blob/master/app/assets/images/icon.png" width="80"> Proofs Line
## Description  
Proofs Line is a mathematical question and answer forum with an upvote / downvote and search feature inspired by Stack Overflow and Math Exchange.

Meaning of site name: Mathematical **proofs** are arguments for mathematical statements such as theorems and the mathematical defintion for a **line** is a straight one-dimensional figure having no thickness and extending *infinitely* in both directions, therefore a site of inifinite "arugments".

[Link to live site!](https://proofs-line.herokuapp.com/#/)   

## Web and Mobile 
Compatible with iPhone 8, iPhone 8+, iPhone X, small tablet, iPad, iPad Pro, HDTV 1080p, etc.  
<img src="https://user-images.githubusercontent.com/53027578/85839387-bbd7c180-b74f-11ea-9364-c306e03a1fa0.png" width="600"> &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/53027578/85891361-c9b73200-b7a3-11ea-8253-5f636dd6fce2.png" width="160">  

## Technologies Used
### Languages
#### Frontend
* React/Redux
  * JavaScript library for building user interfaces
* JavaScript
* CSS 
  * Style sheet language used for HTML
* HTML5
  * Markup language used for structuring and presenting content 

#### Backend
* Ruby on rails 
  *  Model–view–controller (MVC) framework
* Jbuilder
  * Generate JSON objects with a Builder-style DSL
* PostgreSQL
  * Database management system

#### Other
* Heroku
  * Hosting
* VS Code 
  * Open source-code editor
* Google fonts
  * Font library
* Font Awesome
  * Icon library
* React icons
  * Icon library
* React HTML Parser
  * A utility for converting HTML strings into React components
* Reactjs-popup
  * A simple react popup component
* react-paginate
  * A ReactJS component to render a pagination
* Quill js
  * Rich text editor
* Images and icons taken from Stack Overflow

## Features
1. ### User Authorization
* Users can create an account, sign into account, and log out of their own account
* Users can use the demo login to try the site
* Users cannot use certain features of the site without logging in (i.e. create questions, answer questions, and upvote and downvote answers)

2. ### Questions
* Users can view all questions posted
  * Only a max of 15 questions shown on each page
  <img src="https://user-images.githubusercontent.com/53027578/85896583-9b3e5480-b7ad-11ea-9b25-9c65cf5204ae.png" width="200">
* Post questions if logged in
  * Has a text editor for the question's body
  <img src="https://user-images.githubusercontent.com/53027578/85896574-94afdd00-b7ad-11ea-980c-824791ba550e.png" width="500">
* Edit and/or delete your own questions

3. ### Answers
* Answer other users' questions if logged in
  * Has a text editor, which allows users to change font size, bold, italicize, underline, add hyperlink, add numbering, and add bullet points
  <img src="https://user-images.githubusercontent.com/53027578/85897148-94fca800-b7ae-11ea-84ba-554716e84633.png" width="500">

4. ### Upvotes and Downvotes
* Upvote and/or downvote questions and answers if logged in
  * If not logged in and tries to vote, popup will appear asking user to sign up or log in
  <img src="https://user-images.githubusercontent.com/53027578/85896668-c0cb5e00-b7ad-11ea-8b05-7eb02d0871db.png" width="500">
* Can switch upvote to downvote and vice versa
* Cannot make multiple upvotes and/or downvote
  <img src="https://user-images.githubusercontent.com/53027578/85896734-e0fb1d00-b7ad-11ea-8d52-fb486ac3715c.png" width="50">  

5. ### Search
* Search for questions based on keyword
* Select questions that contain keywords in title and/or body
* Can search through the navbar search bar or on the search page  
  <img src="https://user-images.githubusercontent.com/53027578/85898070-75ff1580-b7b0-11ea-9c0c-658d0566629f.png" width="150">
  
A simple search bar in the navbar.
It takes what string was searched by the user and redirects it to search component when the user hits the enter button. Then the search component handles finding questions and / or answers that includes the string. In addition, I removed the search bar from the navbar when it was on search page.

```javascript
// search_nav.jsx

render() {
        if (this.state.redirect) {
            return <Redirect to={{
                    pathname: '/search',
                    state: {searchFor: this.state.searchFor}}}/>;
        }

        return (
            <div>
                {!document.location.href.includes("search") ?
                    (<div className="searchbar">
                        <div className="search-img">
                            <i className="fas fa-search"></i>
                        </div>
                        <input 
                            className="search-text-box"
                            type="text"
                            onKeyPress={this.keyPressed}
                        />
                    </div>) : null
                }
            </div>
        )
    }
```

## Currently working on
* Clean up code
* Edit search function to find based on multiple keywords
* Comment on questions and answers
* Text editor that allows math symbols
