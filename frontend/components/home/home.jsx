import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="home-page">
        <div className = 'home-container1'>
            <div className="bg-main">
                <img className ="background" src={window.background}/>
            </div>
            <div className="splash-page-words">
                <h1 className = "home-container1-header">We {`<3`} people who do proofs</h1>
                <div className ="description1">
                    <p>We build products that empowers mathematicans</p>
                    <p>and connect them to solutions that enable</p>
                    <p>productivity, growth, and discovery.</p>
                </div>
            </div>
        </div>
        <div className = "home-container2">
            <h1 className = "second-home-header"> 
                For mathematicans, by mathematicans
            </h1>
            <img className="orange-divider" src={window.orange_divider}/>
            <div className="description2">
                <p> Proofs Line is an <Link to = "/questions" className="link-to-questions">open community</Link> for anyone that maths. We help </p>
                <p> you get answers to your toughest math questions, share knowledge with </p>
                <p> your coworkers in private, and find your next dream job. </p>
            </div>
        </div>
    </div>
)
