// src/pages/requestManagement/Component/Apply/TestApplyRequestSection.jsx

import './ApplyRequestSection.css';
import { useEffect, useState } from "react";

// 샘플 데이터
const sampleApplyRequests = [
    { id: 1, status: "PENDING", description: "Apply request for job 1" },
    { id: 2, status: "ACCEPTED", description: "Apply request for job 2" },
    { id: 3, status: "REJECTED", description: "Apply request for job 3" }
];

const TestApplyRequestSection = () => {
    const [applyRequests, setApplyRequests] = useState([]);
    const [selectedApplyId, setSelectedApplyId] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        // 실제 API 호출을 대신해 샘플 데이터 사용
        console.log("useEffect 실행됨");
        console.log("Sample Apply Requests Loaded:", sampleApplyRequests);
        setApplyRequests(sampleApplyRequests);
    }, []);

    // 상태 변경 함수, 실제 API 호출은 주석 처리
    const handleStatusChange = (applyId) => {
        console.log(`Apply request ${applyId} status updated to ${status}`);
        setSelectedApplyId(null);
        setStatus('');
    };

    return (
        <div className="apply-request-section">
            <h3>Apply Requests</h3>
            <ul>
                {applyRequests.map((apply) => (
                    <li key={apply.id}>
                        <p>Apply ID: {apply.id}</p>
                        <p>Status: {apply.status}</p>
                        <button onClick={() => setSelectedApplyId(apply.id)}>
                            {selectedApplyId === apply.id ? 'Cancel' : 'Change Status'}
                        </button>
                        {selectedApplyId === apply.id && (
                            <div className="status-update">
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="PENDING">Pending</option>
                                    <option value="ACCEPTED">Accepted</option>
                                    <option value="REJECTED">Rejected</option>
                                </select>
                                <button onClick={() => handleStatusChange(apply.id)}>Update Status</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestApplyRequestSection;