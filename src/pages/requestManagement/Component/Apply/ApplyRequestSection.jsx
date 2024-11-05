import axios from 'axios';
import './ApplyRequestSection.css';
import {useEffect, useState} from "react";

const ApplyRequestSection = () => {
    const [applyRequests, setApplyRequests] = useState([]);
    const [selectedApplyId, setSelectedApplyId] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchApplyRequests();
    }, []);

    const fetchApplyRequests = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (!userData) return;

            const response = await axios.get(`/api/v1/apply?profileId=${userData.profileId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setApplyRequests(response.data);
        } catch (error) {
            console.error('Error fetching apply requests:', error);
        }
    };

    const handleStatusChange = async (applyId) => {
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (!userData) return;

            await axios.put(`/api/v1/apply/${applyId}/status/${userData.profileId}`, { applyStatus: status }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
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