import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import HomeNavBarContainer from '../nav_bar/home_nav_bar_container';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    scrollToForMath() {
        var elmnt = document.getElementsByClassName("home-container2");
        $(elmnt)[0].scrollIntoView({ behavior: "smooth"});
    }
    
    scrollToForBusiness() {
        var elmnt = document.getElementsByClassName("home-container3");
        $(elmnt)[0].scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div className="home-page">
                <div className="home-page-nav-bar">
                    <HomeNavBarContainer/>
                </div>
                <div className = 'home-container1'>
                    <div className="bg-main">
                        <img className ="background" src={window.background}/>
                        <img className="background-change" src={window.background_change}/>
                    </div>
                    <div className="splash-page-words">
                        <h1 className = "home-container1-header">We {`<3`} people who do proofs</h1>
                        <div className ="description1">
                            <p>We build products that empowers mathematicians</p>
                            <p>and connect them to solutions that enable</p>
                            <p>productivity, growth, and discovery.</p>
                        </div>
                        <div className="description1-change">
                            <p>We build products that empowers</p>
                            <p>mathematicians and connect them to</p>
                            <p>solutions that enable productivity,</p>
                            <p>growth, and discovery.</p>
                        </div>
                        <br></br>
                        <div className="home-page-scroll-btns">
                            <div className = "scroll-btn">
                                <button className = "scroll-to-math" onClick= {this.scrollToForMath.bind(this)}>For mathematicians</button>
                            </div>
                            <div className="scroll-btn">
                                <button className = "scroll-to-business" onClick={this.scrollToForBusiness.bind(this)}>For businesses</button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className = "home-container2">
                    <div className="before-boxes">
                        <h1 className = "second-home-header"> 
                            For mathematicians, by mathematicians
                        </h1>
                        <img className="orange-divider" src={window.orange_divider}/>
                        <div className="description2">
                            <p> Proofs Line is an <Link to = "/questions" className="link-to-questions">open community</Link> for anyone that maths. We help
                            you get answers to your toughest math questions, share knowledge with 
                            your coworkers in private, and find your next dream job. </p>
                        </div>
                    </div>
                    <div className ="three-boxes">
                        <div className="public-q-and-a">
                            <img className="public-q-and-a-img" src={window.public_q_and_a}/>
                            <p className ="three-boxes-title">Public Q&A</p>
                            <div className="box-description">
                                <p>Get answers to more than 5
                                questions and give back by
                                sharing your knowledge with
                                others. <Link to="/signup" className="link-to-signup">Sign up</Link> for an account.</p>
                            </div>
                            <Link to="/questions"><button className="browse-questions-btn">Browse questions</button></Link>
                        </div>
                        <div className="private-q-and-a">
                            <img className="private-q-and-a-img" src={window.private_q_and_a} />
                            <p className="three-boxes-title">Private Q&A</p>
                            <div className ="box-description">
                                <p>Level up with Proofs Line while you
                                work. Share knowledge privately with
                                your coworkers using our flagship Q&A
                                engine.</p>
                            </div>
                            <Link to="/teams"><button className="try-for-free-btn">Try for free</button></Link>
                        </div>
                        <div className="browse-jobs">
                            <img className="browse-jobs-img" src={window.browse_jobs} />
                            <p className="three-boxes-title">Browse Jobs</p>
                            <div className ="box-description">
                                <p>Find the right job through high quality
                                listings and search for roles based on
                                title, technology stack, salary, location,
                                and more.</p>
                            </div>
                            <Link to="/jobs"><button className="find-a-job-btn">Find a job</button></Link>
                        </div>
                    </div>
                </div>
                <div className="home-container3">
                    <div className="before-boxes">
                        <h1 className="third-home-header">
                            For businesses, by mathematicians
                        </h1>
                        <img className="orange-divider" src={window.orange_divider} />
                        <div className="description2">
                            <p> Our mission is to help mathematicians write the script of the future. This means helping you 
                            find and hire skilled mathematicians for your business and providing them the tools they need 
                            to share knowledge and work effectively. </p>
                        </div>
                    </div>
                    <div className="three-boxes-bottom">
                        <div className="share">
                            <img className="share-img" src={window.share}/>
                            <div className="share-description">
                                <p>Quickly find and share
                                internal knowledge with
                                Private Q&A</p>
                            </div>
                        </div>
                        <div className="find">
                            <img className="find-img" src={window.find} />
                            <div className="find-description">
                                <p>Find the perfect candidate
                                for your growing technical
                                team with Talent solutions</p>
                            </div>
                        </div>
                        <div className="rocket">
                            <img className="rocket-img" src={window.rocket} />
                            <div className="rocket-description">
                                <p>Accelerate the discovery of
                                your products or services
                                through our Advertising
                                platform</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;