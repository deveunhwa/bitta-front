import axios from 'axios';
import './ScoutRequestSection.css';
import {useEffect, useState} from "react";

const ScoutRequestSection = () => {
    const [scoutRequests, setScoutRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchScoutRequests();
    }, []);

    const fetchScoutRequests = async () => {
        setLoading(true);
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (!userData) return;

            const response = await axios.get(`/api/v1/scout/receiver/${userData.profileId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setScoutRequests(response.data.receivedRequests);
        } catch (error) {
            console.error('Error fetching scout requests:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAccept = (id) => {
        console.log(`Scout request ${id} accepted`);
        // 추가 요청 로직 필요 시 구현
    };

    const handleReject = (id) => {
        console.log(`Scout request ${id} rejected`);
        // 추가 요청 로직 필요 시 구현
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