// src/pages/requestManagement/Component/Scout/TestScoutRequestSection.jsx

import './ScoutRequestSection.css';
import { useEffect, useState } from "react";

// 샘플 데이터
const sampleScoutRequests = [
    { id: 1, description: "Scout request for role 1", status: "PENDING", nickname: "UserA" },
    { id: 2, description: "Scout request for role 2", status: "ACCEPTED", nickname: "UserB" },
    { id: 3, description: "Scout request for role 3", status: "REJECTED", nickname: "UserC" }
];

const TestScoutRequestSection = () => {
    const [requestList, setRequestList] = useState([]);
    const [respondList, setRespondList] = useState([]);

    useEffect(() => {
        setRequestList(sampleScoutRequests.filter((req) => req.status !== "REJECTED"));
        setRespondList(sampleScoutRequests);
    }, []);

    const handleStatusChange = (id, newStatus) => {
        setRespondList((prevList) =>
            prevList.map((request) =>
                request.id === id ? { ...request, status: newStatus } : request
            )
        );
    };

    return (
        <div className="scout-request-section">
            {/* Request Section */}
            <div className="request-container">
                <h3 className="section-header">Request</h3>
                <ul>
                    {requestList.map((request) => (
                        <li key={request.id} className="request-card">
                            <p>Description: {request.description}</p>
                            <p>Status: <span className={`status-${request.status.toLowerCase()}`}>{request.status}</span></p>
                            <a href="/feed" className="feed-link">Feed로 이동</a>
                            <a href="#" className="chat-link">채팅으로 이동</a> {/* Moved below Feed link */}
                            {request.status === "REJECTED" && (
                                <a href="#" className="delete-link">Request 삭제</a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Respond Section */}
            <div className="respond-container">
                <h3 className="section-header">Respond</h3>
                <ul>
                    {respondList.map((respond) => (
                        <li key={respond.id} className="request-card">
                            <p>Nickname: {respond.nickname}</p>
                            <p>Description: {respond.description}</p>
                            <p>Status: <span className={`status-${respond.status.toLowerCase()}`}>{respond.status}</span></p>
                            <a href="/feed" className="feed-link">Feed로 이동</a>
                            <div className="status-update">
                                <select
                                    value={respond.status}
                                    onChange={(e) =>
                                        handleStatusChange(respond.id, e.target.value)
                                    }
                                >
                                    <option value="PENDING">Pending</option>
                                    <option value="ACCEPTED">Accepted</option>
                                    <option value="REJECTED">Rejected</option>
                                </select>
                                <button className="update-status">Update Status</button>
                            </div>
                            <a href="#" className="chat-link">채팅으로 이동</a> {/* Moved below Feed link */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TestScoutRequestSection;