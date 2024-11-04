// src/Component/Apply/ApplyRequestSection.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ApplyRequestSection.css';

const ApplyRequestSection = () => {
    const [applyRequests, setApplyRequests] = useState([]);
    const [selectedApplyId, setSelectedApplyId] = useState(null);
    const [status, setStatus] = useState('');
    const profileId = 1; // 프로필 ID 예시, 추후 로그인 정보로 대체

    useEffect(() => {
        fetchApplyRequests();
    }, []);

    const fetchApplyRequests = async () => {
        try {
            const response = await axios.get(`/api/v1/apply?profileId=${profileId}`);
            setApplyRequests(response.data);
        } catch (error) {
            console.error('Error fetching apply requests:', error);
        }
    };

    const handleStatusChange = async (applyId) => {
        try {
            await axios.put(`/api/v1/apply/${applyId}/status/${profileId}`, { applyStatus: status });
            fetchApplyRequests(); // 상태 업데이트 후 목록 다시 로드
            setSelectedApplyId(null);
            setStatus('');
        } catch (error) {
            console.error('Error updating apply status:', error);
        }
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

export default ApplyRequestSection;