// src/pages/requestManagement/RequestManagement.jsx

import React from 'react';
import './requestManagement.css';
import Calendar1 from '../Component/Calendar/Calendar1';
import ApplyRequestSection from '../Component/Apply/ApplyRequestSection';
import ScoutRequestSection from '../Component/Scout/ScoutRequestSection';

function RequestManagement() {
    return (
        <div className="request-management-container">
            <div className="calendar-section">
                <Calendar1 />
            </div>
            <div className="request-sections">
                <div className="apply-section">
                    <ApplyRequestSection />
                </div>
                <div className="scout-section">
                    <ScoutRequestSection />
                </div>
            </div>
        </div>
    );
}

export default RequestManagement;