import React from 'react';
import Navbar from '../nav_bar/nav_bar';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';


class Job extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: [],
            jobPostings: [],
            showJobIdx: null
        }
        this.jobArray();
        this.jobPostingArray();
        this.getJobIdx.bind(this);
    }

    jobArray() {
        for (let i = 0; i < 20; i++) {
            this.state.jobs.push(
                <div className="ind-job">
                    <img />
                    <div className="ind-job-title">
                        Job {i} Title
                    </div>
                    <div className="ind-job-second-line">
                        <div className="ind-job-company-name">
                            Company name &nbsp;
                        </div>
                        <li className="ind-job-location">
                            <span>
                                Location
                            </span>
                        </li>
                    </div>
                </div>
            )
        }
    }

    jobPostingArray() {
        for (let i = 0; i < 20; i++) {
            this.state.jobPostings.push(
                <div>
                    <div className="job-show-top">
                        <div className="job-show-title">
                            Job {i} Title
                        </div>
                        <div className="job-show-company-location-wrapper">
                            <div className="job-show-company">
                                Company Name  &nbsp; 
                            </div>
                            <div>
                                <li className="job-show-location">
                                    <span>
                                        - Location
                                    </span>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="job-show-description">
                        <div className="job-show-description-header">
                            About this job
                        </div>
                        <div className="job-show-description-header">
                            Job description
                        </div>
                    </div>
                </div>
            )
        }
    }

    getJobIdx(idx) {
        this.setState({ showJobIdx: idx })
    }

    render() {
        return (
            <div>
                <div className="job-show-navbar">
                    <Navbar/>
                </div>
                <div className="job-show-midsection">
                    <div className="job-show-sidebar">
                        <Sidebar/>
                    </div>
                    <div className="jobs-header-scroll-show-wrapper">
                        <div className="jobs-header">
                            <div className="jobs-header1">
                                Mathematicians first. &nbsp; 
                                <div className="jobs-header2">
                                    You’ll never receive recruiter 
                                    spam or see fake job listings on our site.
                                </div>
                            </div>
                        </div>
                        <div className="jobs-side-scroll-show-wrapper">
                            <div className="jobs-side-scroll">
                                <div className="ind-job-wrapper">
                                    {this.state.jobs.map((job, idx) => (
                                        <div onClick={() => this.getJobIdx(idx)} key ={idx}>
                                            {job}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="job-show">
                                <div>
                                    {(this.state.showJobIdx) ?
                                    this.state.jobPostings[this.state.showJobIdx] :
                                    <div>
                                        <div className="job-show-top">
                                            <div className="job-show-title">
                                                Job 0 Title
                                            </div>
                                            <div className="job-show-company-location-wrapper">
                                                <div className="job-show-company">
                                                    Company Name &nbsp; 
                                                </div>
                                                <div>
                                                    <li className="job-show-location">
                                                        <span>
                                                            - Location
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-show-description">
                                            <div className="job-show-description-header">
                                                About this job
                                            </div>
                                            <div className="job-show-description-header">
                                                Job description
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className ="job-footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Job;