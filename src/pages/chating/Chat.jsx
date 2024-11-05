import React, { useEffect, useState } from 'react';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // WebSocket 연결 설정
        const ws = new WebSocket("ws://localhost:8080/ws");

        ws.onopen = () => console.log("Connected to WebSocket");
        ws.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };
        ws.onclose = () => console.log("Disconnected from WebSocket");

        setSocket(ws);

        return () => ws.close();
    }, []);

    const sendMessage = () => {
        if (socket && message.trim()) {
            const chatMessage = { content: message, chatRoomId: 1 }; // chatRoomId는 테스트 용으로 1로 설정
            socket.send(JSON.stringify(chatMessage));
            setMessage('');
        }
    };

    return (
        <div>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index}>{msg.content}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;
