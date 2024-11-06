// Test1.jsx
import { useEffect, useState } from 'react';

export function getUsernameFromToken() {
    // JWT에서 username을 추출하는 로직
    function base64UrlDecode(str) {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        const decoded = atob(base64);
        return decodeURIComponent(
            decoded
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
    }

    const token = localStorage.getItem('access');
    if (!token) {
        console.error("No access token found in localStorage.");
        return null;
    }

    try {
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('Invalid JWT token format');
        }

        const payload = JSON.parse(base64UrlDecode(parts[1]));
        return payload.username; // username 반환
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
}

function UsernameDisplay() {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const usernameFromToken = getUsernameFromToken();
        setUsername(usernameFromToken);
    }, []);

    return <div>{username ? `Username: ${username}` : "No username found"}</div>;
}

export default UsernameDisplay;