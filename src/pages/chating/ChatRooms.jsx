import { useState, useEffect } from 'react';
import axios from 'axios';

function ChatRooms() {
    const [chatRooms, setChatRooms] = useState([]);

    // 채팅방 목록 가져오기
    const fetchChatRooms = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/chat/room', {
                page: 0, // 원하는 페이지 번호
                size: 10, // 페이지 크기
                sender: "userA", // 더미 발신자
                receiver: "userB" // 더미 수신자
            });
            setChatRooms(response.data.result);
        } catch (error) {
            console.error("Failed to fetch chat rooms:", error);
        }
    };

    // 새 채팅방 생성하기
    const createChatRoom = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/chat/room', {
                nickname1: "user1", // 더미 사용자 1
                nickname2: "user2" // 더미 사용자 2
            });
            console.log(response.data.message);
            fetchChatRooms(); // 새 채팅방을 생성한 후 목록을 다시 불러옵니다.
        } catch (error) {
            console.error("Failed to create chat room:", error);
        }
    };

    useEffect(() => {
        fetchChatRooms(); // 컴포넌트가 마운트될 때 채팅방 목록을 가져옵니다.
    }, []);

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
