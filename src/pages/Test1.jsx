import { useState } from 'react';

// UTF-8 디코딩을 지원하는 함수
function base64UrlDecode(str) {
    const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = atob(base64);
    try {
        return decodeURIComponent(
            decoded
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
    } catch (e) {
        console.error("Error decoding UTF-8:", e);
        return null;
    }
}

function decodeJWT(token) {
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('Invalid JWT token');
    }

    // Header와 Payload 부분만 UTF-8로 디코딩
    const header = JSON.parse(base64UrlDecode(parts[0]));
    const payload = JSON.parse(base64UrlDecode(parts[1]));

    return { header, payload };
}

function JWTDecoder() {
    const [token, setToken] = useState('');
    const [decoded, setDecoded] = useState(null);
    const [error, setError] = useState(null);

    const handleDecode = () => {
        try {
            const result = decodeJWT(token);
            setDecoded(result);
            setError(null);
        } catch (err) {
            setDecoded(null);
            setError("Invalid JWT token");
        }
    };

    return (
        <div>
            <h2>JWT Decoder</h2>
            <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter JWT token"
                style={{ width: '300px', marginRight: '10px' }}
            />
            <button onClick={handleDecode}>Decode</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {decoded && (
                <div>
                    <h3>Decoded JWT</h3>
                    <pre>{JSON.stringify(decoded, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default JWTDecoder;