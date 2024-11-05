import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatRooms() {
    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
        // 채팅방 목록 가져오기
        axios.get('http://localhost:8080/api/v1/chat/room')
            .then(response => setChatRooms(response.data.result))
            .catch(error => console.error("Failed to fetch chat rooms:", error));
    }, []);

    const createChatRoom = () => {
        axios.post('http://localhost:8080/api/v1/chat/room', {
            nickname1: "user1",  // 예시 데이터
            nickname2: "user2"
        }).then(response => {
            console.log(response.data.message);
        }).catch(error => console.error("Failed to create chat room:", error));
    };

    return (
        <div>
            <h2>Chat Rooms</h2>
            <ul>
                {chatRooms.map((room, index) => (
                    <li key={index}>{room.name}</li>
                ))}
            </ul>
            <button onClick={createChatRoom}>Create Chat Room</button>
        </div>
    );
}

export default ChatRooms;
