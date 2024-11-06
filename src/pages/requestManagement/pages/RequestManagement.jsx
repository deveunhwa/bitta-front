import './requestManagement.css';
import Calendar1 from 'src/pages/requestManagement/Component/Apply/ApplyRequestSection';
import ApplyRequestSection from 'src/pages/requestManagement/Component/Apply/ApplyRequestSection';
import ScoutRequestSection from 'src/pages/requestManagement/Component/Scout/ScoutRequestSection';
import {useEffect, useState} from "react";

function RequestManagement() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData)); // 로컬 스토리지에서 사용자 정보 로드
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