// src/Component/Scout/ScoutRequestSection.jsx

import React, { useState, useEffect } from 'react';
import './ScoutRequestSection.css';

const ScoutRequestSection = () => {
    const [scoutRequests, setScoutRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const memberId = 1; // 예시 ID, 추후 로그인 정보로 대체

    useEffect(() => {
        fetchScoutRequests();
    }, []);

    const fetchScoutRequests = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/v1/scout/receiver/${memberId}`);
            const data = await response.json();
            setScoutRequests(data.receivedRequests);
        } catch (error) {
            console.error('Error fetching scout requests:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAccept = (id) => {
        console.log(`Scout request ${id} accepted`);
        // 필요 시 API 요청 추가
    };

    const handleReject = (id) => {
        console.log(`Scout request ${id} rejected`);
        // 필요 시 API 요청 추가
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

export default ScoutRequestSection;