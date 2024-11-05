// src/pages/requestManagement/TestRequestManagement.jsx

import './requestManagement.css';
import Calendar1 from "../Component/Calendar/Calendar1";
import TestApplyRequestSection from "../Component/Apply/TestApplyRequestSection";
import TestScoutRequestSection from "../Component/Scout/TestScoutRequestSection";
import { useEffect, useState } from "react";

function TestRequestManagement() {
    const [userData, setUserData] = useState(null);
    const [calendarEvents, setCalendarEvents] = useState([]);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        } else {
            setUserData({ nickname: "테스트 사용자" });
        }
    }, []);

    const addCalendarEvent = (request) => {
        setCalendarEvents((prevEvents) => [
            ...prevEvents,
            {
                title: request.jobName,
                start: new Date(2024, 10, 15),
                end: new Date(2024, 10, 20),
            },
        ]);
    };

    return (
        <div className="request-management-container">
            {userData && (
                <div className="profile-info">
                    <h3>어서오세요, {userData.nickname}</h3>
                </div>
            )}
            <div className="calendar-section">
                <Calendar1 events={calendarEvents} />
            </div>
            <div className="request-sections-vertical">
                <div className="apply-section">
                    <h2 className="section-title">구인 요청</h2>
                    <TestApplyRequestSection addCalendarEvent={addCalendarEvent} />
                </div>
                <div className="scout-section">
                    <h2 className="section-title">스카웃 요청</h2>
                    <TestScoutRequestSection />
                </div>
            </div>
        </div>
    );
}

export default TestRequestManagement;