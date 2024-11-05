// src/pages/requestManagement/Component/Scout/TestScoutRequestSection.jsx

import './ScoutRequestSection.css';
import { useEffect, useState } from "react";

// 샘플 데이터
const sampleScoutRequests = [
    { id: 1, description: "Scout request for role 1" },
    { id: 2, description: "Scout request for role 2" },
    { id: 3, description: "Scout request for role 3" }
];

const TestScoutRequestSection = () => {
    const [scoutRequests, setScoutRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 실제 API 요청 대신 샘플 데이터 사용
        console.log("Sample Apply Requests Loaded:", sampleScoutRequests);
        setScoutRequests(sampleScoutRequests);
        setLoading(false);
    }, []);

    const handleAccept = (id) => {
        console.log(`Scout request ${id} accepted`);
    };

    const handleReject = (id) => {
        console.log(`Scout request ${id} rejected`);
    };

    return (
        <div className="scout-request-section">
            <h2>Scout Requests</h2>
            {loading ? (
                <p>Loading scout requests...</p>
            ) : scoutRequests.length === 0 ? (
                <p>No scout requests found.</p>
            ) : (
                <ul>
                    {scoutRequests.map((request) => (
                        <li key={request.id}>
                            <p>{request.description}</p>
                            <button onClick={() => handleAccept(request.id)}>Accept</button>
                            <button onClick={() => handleReject(request.id)}>Reject</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TestScoutRequestSection;