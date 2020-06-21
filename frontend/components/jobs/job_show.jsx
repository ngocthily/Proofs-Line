import React from 'react';
import Navbar from '../nav_bar/nav_bar';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import { AiFillCustomerService } from "react-icons/ai";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { BsBatteryCharging } from "react-icons/bs";
import { BsAspectRatio } from "react-icons/bs"; 
import { BsBarChart } from "react-icons/bs"; 
import { BsBriefcaseFill } from "react-icons/bs"; 
import { BsCapslockFill } from "react-icons/bs";
import { BsCheckBox } from "react-icons/bs";
import { BsCloudDownload } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsFileSpreadsheet } from "react-icons/bs";
import { BsGeo } from "react-icons/bs";
import { BsLockFill } from "react-icons/bs";
import { BsPentagonFill } from "react-icons/bs";
import { BsPieChartFill } from "react-icons/bs";
import { BsVolumeUp } from "react-icons/bs";
import { BsWatch } from "react-icons/bs";


class Job extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: [],
            jobPostings: [],
            showJobIdx: null,
            jobIcon: [
                <AiFillCustomerService size={45}/>,
                <BsReverseLayoutTextWindowReverse  size={45}/>,
                <BsFillClockFill size={45}/>,
                <BsFillMusicPlayerFill size={45}/>,
                <BsBatteryCharging size={45}/>,
                <BsAspectRatio size={45}/>,
                <BsBarChart size={45}/>,
                <BsBriefcaseFill size={45}/>,
                <BsCapslockFill size={45}/>,
                <BsCheckBox size={45}/>,
                <BsCloudDownload size={45}/>,
                <BsClockHistory size={45}/>,
                <BsEyeSlashFill size={45}/>,
                <BsFileSpreadsheet size={45}/>,
                <BsGeo size={45}/>,
                <BsLockFill size={45}/>,
                <BsPentagonFill size={45}/>,
                <BsPieChartFill size={45}/>,
                <BsVolumeUp size={45}/>,
                <BsWatch size={45}/>
            ],
            jobTitles: [
                "Mathematican",
                "Mathematics TA at UCSF",
                "Actuary",
                "Cryptographer",
                "Economist",
                "Financial planner",
                "Investment analyst",
                "Statistician",
                "Operations research analyst",
                "Systems engineer",
                "Inventory control specialist",
                "Budget analyst",
                "Accountant",
                "Insurance underwriter",
                "Market researcher",
                "Cost estimator",
                "Fraud investigator",
                "Energy analyst",
                "Math tutor",
                "Algorithms engineer"
            ],
            companyNames: [
                "Music Head",
                "Corrector",
                "Clock Work",
                "Old School Ipod",
                "Charged",
                "Ratio Aspect",
                "Bars",
                "Briefcase",
                "Data Up",
                "Checkmark",
                "Cloud Nine",
                "Past Time",
                "Private",
                "Schema",
                "Geo spot",
                "Locked",
                "5 Points",
                "3.14",
                "Speaker",
                "Watch"
            ],
            locations: [
                "San Jose, CA",
                "San Francisco, CA",
                "Irvine, CA",
                "Los Angeles, CA",
                "Fremont, CA",
                "Palo Alto, CA",
                "Oakland, CA",
                "Portland, OR",
                "Seattle, WA",
                "New York, NY",
                "Chicago, IL",
                "Tempe, Arizona",
                "Amherst, MA",
                "Jersey City, Jersey",
                "Austin, TX",
                "New Orleans, LA",
                "Washington, D.C.",
                "San Diego, CA",
                "Boston, MA",
                "Sacramento, CA"
            ],
            jobDescription: [

            ]
        }
        this.jobArray();
        this.jobPostingArray();
        this.getJobIdx.bind(this);
    }

    jobArray() {
        for (let i = 0; i < 20; i++) {
            this.state.jobs.push(
                <div className="ind-job">
                    <div className="ind-job-icon">
                        {this.state.jobIcon[i]}
                    </div>
                    <div className="ind-job-wrapper">
                        <div className="ind-job-title">
                            {this.state.jobTitles[i]}
                        </div>
                        <div className="ind-job-second-line">
                            <div className="ind-job-company-name">
                                {this.state.companyNames[i]} &nbsp;
                            </div>
                            <li className="ind-job-location">
                                <span>
                                    {this.state.locations[i]}
                                </span>
                            </li>
                        </div>
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
                            {this.state.jobIcon[i]} {this.state.jobTitles[i]}
                        </div>
                        <div className="job-show-company-location-wrapper">
                            <div className="job-show-company">
                                {this.state.companyNames[i]} &nbsp; 
                            </div>
                            <div>
                                <li className="job-show-location">
                                    <span>
                                        - {this.state.locations[i]}
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
                            Job description{/* {this.state.jobDescription[i]} */}
                        </div>
                        <div>

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
                                                <AiFillCustomerService size={45} />
                                                {this.state.jobTitles[0]}
                                            </div>
                                            <div className="job-show-company-location-wrapper">
                                                <div className="job-show-company">
                                                    {this.state.companyNames[0]} &nbsp; 
                                                </div>
                                                <div>
                                                    <li className="job-show-location">
                                                        <span>
                                                            - {this.state.locations[0]}
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