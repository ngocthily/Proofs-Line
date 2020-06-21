import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="sidebar">
        <Link to="/" className="sidebar-home-link">
            <p className="sidebar-home">Home</p>
        </Link>
        <p className="sidebar-public">PUBLIC</p>
        <div className="sidebar-title">
            <Link to="/questions" className="sidebar-title-link">
                <p className="sidebar-title-word">Proofs Line</p>
            </Link>
        </div>
        <Link to="/jobs" className="sidebar-job-link">
            <p className="sidebar-jobs">Jobs</p>
        </Link>
    </div>
)