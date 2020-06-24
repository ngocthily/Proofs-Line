import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

class Team extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
                <div>
                    <div className="teams-navbar1">
                        <Link to = "/">
                            <img className="teams-navbar-icon" src={window.icon}/>
                        </Link>
                        <div className="teams-navbar-header">
                            Teams
                        </div>
                    </div>
                    <div className="teams-navbar2">
                        <li>Overview</li>
                        <li>Why Proofs Line</li>
                        <li>Pricing</li>
                        <li>Collaboration</li>
                        <li>Resources</li>
                    </div>
                    <div className="teams-container1">
                        <div className="teams-container1-content">
                            <div className="teams-container1-header-info-wrapper">
                                <div className="teams-container1-header">
                                    Organize and share knowledge across your company
                                </div>
                                <div className="teams-container1-info">
                                    Proofs Line for Teams is a space for teammates to ask 
                                    questions and find answers. Sharing company information 
                                    has never been easier.
                                </div>
                            </div>
                            <div className="teams-container1-img-wrapper">
                                <img className="teams-contanier1-img" src={window.teams_container1}/>
                            </div>
                        </div>
                    </div>
                    <div className="teams-container2">
                        <div className="teams-container2-content">
                            <div className="teams-container2-header-info-wrapper">
                                <div className="teams-container2-starter-wrapper">
                                    <img className="teams-container2-starter" src={window.starter}/>
                                </div>
                                <div className="teams-container2-header">
                                    Get your work done quicker
                                </div>
                                <div className="teams-container2-info">
                                    Keep all your team’s information in a private,
                                    up-to-date knowledge base. So you can find answers 
                                    faster than ever.
                                </div>
                            </div>
                            <div className="teams-container2-3boxes">
                                <div className="teams-container2-box1">
                                    <img className="teams-container2-clock" src={window.clock}/>
                                    <div className="teams-container2-box1-header">
                                        Stay productive
                                    </div>
                                    <div className="teams-container2-box1-info">
                                        Focus on building products, not
                                        answering questions.
                                    </div>
                                </div>
                                <div className="teams-container2-box2">
                                    <img className="teams-container2-onboard" src={window.onboard}/>
                                    <div className="teams-container2-box2-header">
                                        Onboard faster
                                    </div>
                                    <div className="teams-container2-box2-info">
                                        Get new hires up to speed in
                                        record time.
                                    </div>
                                </div>
                                <div className="teams-container2-box3">
                                    <img className="teams-container2-lightbulb" src={window.lightbulb}/>
                                    <div className="teams-container2-box3-header">
                                        Unlock information
                                    </div>
                                    <div className="teams-container2-box3-info">
                                        Stop digging through chat threads, emails, and old wikis.
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="teams-container3">
                        <div className="teams-container3-content">
                            <div className="teams-container3-starter-wrapper">
                                <img className="teams-container3-starter" src={window.starter}/>
                            </div>
                            <div className="teams-container3-header">
                                <div className="teams-container3-header-notbold">
                                    Built on our &nbsp;
                                </div>
                                <div className="teams-container3-header-bold">
                                    trusted Q&A platform
                                </div>
                            </div>
                            <div className="teams-container3-section">
                                <div className="teams-container3-img-wrapper">
                                    <img className="teams-container3-img" src={window.teams_container3}/>
                                </div>
                                <div className="teams-container3-section-header-info-wrapper">
                                    <div className="teams-container3-section-header">
                                        Get answers from experts
                                    </div>
                                    <div className="teams-container3-section-info">
                                        Ask your team a question and tag someone who’ll know the answer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="teams-container4">
                        <div className="teams-container4-section">
                            <div className="teams-container4-section-header-info-wrapper">
                                <div className="teams-container4-section-header">
                                    Keep information up to date
                                </div>
                                <div className="teams-container4-section-info">
                                    Add more context over time and use voting to show new content.
                                </div>
                            </div>
                            <div className="teams-container4-img-wrapper">
                                <img className="teams-container4-img" src={window.teams_container4}/>
                            </div>
                        </div>
                    </div>
                    <div className="teams-container5">
                        <div className="teams-container5-section">
                            <div className="teams-container5-img-wrapper">
                                <img className="teams-container5-img" src={window.teams_container5}/>
                            </div>
                            <div className="teams-container5-section-header-info-wrapper">
                                <div className="teams-container5-section-header">
                                    Discover internal knowledge
                                </div>
                                <div className="teams-container5-section-info">
                                    Find information and use tags to follow topics you’re interested in.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="teams-container6">
                        <div className="teams-container6-section">
                            <div className="teams-container6-section-header-info-wrapper">
                                <div className="teams-container6-section-header">
                                    Integrate with other tools
                                </div>
                                <div className="teams-container6-section-info">
                                    Proofs Line for Teams plays nice with all your favorite apps.
                                </div>
                            </div>
                            <div className="teams-container6-all-img">
                                <div className="teams-container6-img-wrapper">
                                    <img className="teams-container6-img" src={window.teams_container6}/>
                                </div>
                                <div className="teams-container6-img-icons">
                                    <div className="teams-container6-img-ind-icon">
                                        <img className="slack-icon" src={window.slack_icon}/>
                                    </div>
                                    <div className="teams-container6-img-ind-icon">
                                        <img className="microsoft-team-icon" src={window.microsoft_team_icon}/>
                                    </div>
                                    <div className="teams-container6-img-ind-icon">
                                        <img className="jira-icon" src={window.jira_icon}/>
                                    </div>
                                    <div className="teams-container6-img-ind-icon">
                                        <img className="github-icon" src={window.github_icon}/>
                                    </div>
                                    <div className="teams-container6-img-ind-icon">
                                        <img className="okta-icon" src={window.okta_icon}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>

        )
    }
}

export default Team;