import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas } from "react-icons/fa";

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            proofsBgColor: "#ffffff",
            jobsBgColor: "#ffffff",
            proofsBorder: "none",
            jobsBorder: "none"
        }
    }

    componentDidMount() {
        if (document.location.href.includes("questions")) {
            this.setState({
                proofsBgColor: "#eff0f1",
                jobsBgColor: "rgba(0,0,0,0.0)",
                proofsBorder: "3px solid #f47f23",
                jobsBorder: "none"
            })
        } else if (document.location.href.includes("jobs")) {
            this.setState({
                proofsBgColor: "rgba(0,0,0,0.0)",
                jobsBgColor: "#eff0f1",
                proofsBorder: "none",
                jobsBorder: "3px solid #f47f23"
            })
        }
    }

    render() {
        return (
            <div className="sidebar-container">
            <div className="sidebar">
                    <Link to="/" className="sidebar-home-link">
                        <p className="sidebar-home">Home</p>
                    </Link>
                <p className="sidebar-public">PUBLIC</p>
                <div className="sidebar-title">
                    <Link to="/questions" className="sidebar-title-link">
                            <p className="sidebar-title-word" style={{ backgroundColor: this.state.proofsBgColor, borderRight: this.state.proofsBorder }}>
                            <FaGlobeAmericas /> &nbsp;
                            Proofs Line
                        </p>
                    </Link>
                </div>
                <div className="sidebar-job-wrapper">
                <Link to="/jobs" className="sidebar-job-link">
                    <p className="sidebar-jobs" style={{ backgroundColor: this.state.jobsBgColor, borderRight: this.state.jobsBorder }}>
                        &nbsp;  &nbsp;  &nbsp; Jobs &nbsp; 
                    </p>
                </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Sidebar;