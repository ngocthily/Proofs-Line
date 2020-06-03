import React from 'react';
// import { Link } from 'react-router-dom';

export default () => (
    <div className ="entire-footer">
        {/* <Link to="/"><img className="footer-icon-img" src={window.icon} /></Link> 
        <div className="footer-section1">
            <Link to="/" className="footer-header"><h4>Proofs Line</h4></Link>
            <Link to="/questions" className="footer-p"><p className="footer-questions">Questions</p></Link>
        </div>
        <div className="footer-section2">
            <a href="https://github.com/ngocthily/Proofs-Line" className="footer-header"><h4>Company</h4></a>
            <a href="https://github.com/ngocthily/Proofs-Line" className="footer-p"><p>About</p></a>
        </div> */}
        <div className = "footer-social-links">
            <div className="github">
                <a href="https://github.com/ngocthily"><img className="github-img" src={window.github} /></a>
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/ngocthily/"><img className="linkedin-img" src={window.linkedin} /></a>
            </div>
        </div>
    </div>
)