// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calendar1 from "./pages/Calendar1.jsx";
import Jobpost from "./pages/JobPost.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx"

// import Chat from "./pages/Chat.jsx";
// import Register from "./pages/Register.jsx";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Calendar1" element={<Calendar1 />} />
                <Route path="/Jobpost" element={<Jobpost />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                {/*<Route path="/Chat" element={<Chat />} />*/}

            </Routes>
        </Router>
    );
}

export default App;

