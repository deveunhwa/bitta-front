// src/pages/requestManagement/TestRequestManagement.jsx

import './requestManagement.css';
import Calendar1 from "../Component/Calendar/Calendar1";
import TestApplyRequestSection from "../Component/Apply/TestApplyRequestSection";
import TestScoutRequestSection from "../Component/Scout/TestScoutRequestSection";
import { useEffect, useState } from "react";

function TestRequestManagement() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // 샘플 사용자 데이터를 로컬에 저장된 'userData'로부터 가져옴
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        } else {
            // 기본 샘플 사용자 데이터를 설정
            setUserData({ nickname: "테스트 사용자" });
        }
    }, []);

    return (
        <div className="request-management-container">
            {userData && (
                <div className="profile-info">
                    <h3>어서오세요, {userData.nickname}</h3>
                </div>
            )}
            <div className="calendar-section">
                <Calendar1 /> {/* 샘플 캘린더 */}
            </div>
            <div className="request-sections">
                <div className="apply-section">
                    <TestApplyRequestSection /> {/* 테스트용 ApplyRequestSection */}
                </div>
                <div className="scout-section">
                    <TestScoutRequestSection /> {/* 테스트용 ScoutRequestSection */}
                </div>
            </div>
        </div>
    );
}

export default TestRequestManagement;