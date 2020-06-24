import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas } from "react-icons/fa";

class Sidebar extends React.Component {
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
                        <p className="sidebar-title-word">
                            <FaGlobeAmericas /> &nbsp;
                            Proofs Line
                        </p>
                    </Link>
                </div>
                <Link to="/jobs" className="sidebar-job-link">
                    <p className="sidebar-jobs">Jobs</p>
                </Link>
            </div>
            </div>
        )
    }
}

export default Sidebar;