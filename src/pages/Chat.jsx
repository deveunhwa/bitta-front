// import { useState, useEffect } from "react";
// import SockJS from "sockjs-client";
// import Stomp from "stompjs";
//
// const Chat = () => {
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState("");
//     const [stompClient, setStompClient] = useState(null);
//
//     useEffect(() => {
//         const socket = new SockJS("http://localhost:8080/ws");
//         const stompClient = Stomp.over(socket);
//         stompClient.connect({}, () => {
//             stompClient.subscribe("/topic/public", (msg) => {
//                 const message = JSON.parse(msg.body);
//                 setMessages((prevMessages) => [...prevMessages, message]);
//             });
//         });
//         setStompClient(stompClient);
//
//         return () => stompClient.disconnect();
//     }, []);
//
//     const sendMessage = () => {
//         if (stompClient && message.trim() !== "") {
//             const chatMessage = { sender: "User", content: message, type: "CHAT" };
//             stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
//             setMessage("");
//         }
//     };
//
//     return (
//         <div>
//             <div>
//                 {messages.map((msg, index) => (
//                     <div key={index}>{msg.sender}: {msg.content}</div>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// };
//
// export default Chat;
