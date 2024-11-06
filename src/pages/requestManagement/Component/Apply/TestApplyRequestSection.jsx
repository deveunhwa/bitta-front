import './ApplyRequestSection.css';
import { useEffect, useState } from "react";

const sampleRequestData = [
    { id: 1, status: "PENDING", jobName: "Job Post 1", jobUrl: "https://example.com/job/1", date: "2024-11-15 ~ 2024-11-20" },
    { id: 2, status: "ACCEPTED", jobName: "Job Post 2", jobUrl: "https://example.com/job/2", date: "2024-11-10 ~ 2024-11-15" },
    { id: 3, status: "REJECTED", jobName: "Job Post 3", jobUrl: "https://example.com/job/3", date: "2024-11-05 ~ 2024-11-10" }
];

const sampleRespondData = [
    { id: 1, status: "PENDING", jobName: "Job Post 4", jobUrl: "https://example.com/job/4", feedUrl: "https://example.com/feed/4", userNickname: "UserA" },
    { id: 2, status: "PENDING", jobName: "Job Post 5", jobUrl: "https://example.com/job/5", feedUrl: "https://example.com/feed/5", userNickname: "UserB" }
];

const TestApplyRequestSection = ({ addCalendarEvent }) => {
    const [requestList, setRequestList] = useState([]);
    const [respondList, setRespondList] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        setRequestList(sampleRequestData);
        setRespondList(sampleRespondData);
    }, []);

    const handleAcceptReject = (id, newStatus) => {
        setRespondList((prevList) =>
            prevList.map((respond) => respond.id === id ? { ...respond, status: newStatus } : respond)
        );
    };

    const handleDeleteRequest = (id) => {
        setRequestList((prevList) => prevList.filter((request) => request.id !== id));
    };

    return (
        <div className="apply-request-container">
            <div className="request-respond-boxes">
                <div className="request-box">
                    <h3>Request</h3>
                    <ul>
                        {requestList.map((request) => (
                            <li key={request.id} className="request-item">
                                <p>Job: <a href={request.jobUrl} target="_blank" rel="noopener noreferrer" className="link"> {request.jobName}</a></p>
                                <p>Date: {request.date}</p>
                                <p className={`status-${request.status.toLowerCase()}`}>Status: {request.status}</p>
                                {request.status === "REJECTED" && (
                                    <button className="delete-request" onClick={() => handleDeleteRequest(request.id)}>Request 삭제</button>
                                )}
                                {request.status === "ACCEPTED" && (
                                    <a href="https://example.com/chat" className="link">채팅으로 이동</a>
                                )}
                                {request.status === "ACCEPTED" && request.date === "2024-11-15 ~ 2024-11-20" && (
                                    <button onClick={() => addCalendarEvent(request)}>캘린더에 일정 추가</button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="respond-box">
                    <h3>Respond</h3>
                    <ul>
                        {respondList.map((respond) => (
                            <li key={respond.id} className="respond-item">
                                <p>Nickname: {respond.userNickname}</p>
                                <p>Job: <a href={respond.jobUrl} target="_blank" rel="noopener noreferrer" className="link">{respond.jobName}</a></p>
                                <p>Feed: <a href={respond.feedUrl} target="_blank" rel="noopener noreferrer" className="link">피드 바로가기</a></p>
                                <p className={`status-${respond.status.toLowerCase()}`}>Status: {respond.status}</p>
                                <select value={respond.status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="PENDING">Pending</option>
                                    <option value="ACCEPTED">Accepted</option>
                                    <option value="REJECTED">Rejected</option>
                                </select>
                                <button className="update-status-button" onClick={() => handleAcceptReject(respond.id, status)}>Update Status</button>
                                <div style={{ marginTop: "10px" }}>
                                    <a href="https://example.com/chat" className="link">채팅 이동</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TestApplyRequestSection;