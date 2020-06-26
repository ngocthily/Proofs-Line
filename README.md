# <img src="https://github.com/ngocthily/Proofs-Line/blob/master/app/assets/images/icon.png" width="80"> Proofs Line
## Description  
Proofs Line is a mathematical question and answer forum with an upvote / downvote and search feature inspired by Stack Overflow and Math Exchange.

Meaning of site name: Mathematical **proofs** are arguments for mathematical statements such as theorems and the mathematical defintion for a **line** is a straight one-dimensional figure having no thickness and extending *infinitely* in both directions, therefore a site of inifinite "arugments".

[Link to live site!](https://proofs-line.herokuapp.com/#/)   

## Web and Mobile
All pages almost mobile friendly!  
Compatible with iPhone 8, iPhone 8+, iPhone X, small tablet, iPad, iPad Pro, HDTV 1080p, etc.  
<img src="https://user-images.githubusercontent.com/53027578/85839387-bbd7c180-b74f-11ea-9364-c306e03a1fa0.png" width="650"> &nbsp; &nbsp; <img src="https://user-images.githubusercontent.com/53027578/85891361-c9b73200-b7a3-11ea-8253-5f636dd6fce2.png" width="184">  
Pages mobile:
- [x] `/` Splash page
- [x] `/questions` All questions page
- [x] `/questions/:id` Individual question page
- [ ] `/questions/new` Ask question page
- [ ] `/questions/edit` Edit question page
- [ ] `/search` Search page
- [x] `/teams` Teams page
- [x] `/jobs` Jobs page

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
* Post questions
* Edit and/or delete your own questions

3. ### Answers
* Answer other users' questions

4. ### Upvotes and Downvotes
* Upvote and/or downvote questions
* Upvote and/or downvote answers
* Can switch upvote to downvote and vice versa
* Cannot make multiple upvotes and/or downvote

5. ### Search
* Search for questions based on keyword
* Select questions that contain keywords in title and/or body

## Currently working on
* Making every page mobile friendly
* Edit search function to find based on multiple keywords
* Comment on questions and answers
