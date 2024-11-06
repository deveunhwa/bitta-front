// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calendar1 from "./pages/Calendar1.jsx";
import Jobpost from "./pages/JobPost.jsx";
import JobPostAddForm from "./pages/JobPostAdd/JobPostAdd.jsx";
import Feed from './pages/Feed/Feed.jsx';
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx"
import Chating from "./pages/chating/Chating.jsx";
// import Register from "./pages/Register.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Calendar1" element={<Calendar1 />} />
                <Route path="/Jobpost" element={<Jobpost />} />
                <Route path="/add-job-post" element={<JobPostAddForm />} />
                <Route path="/Feed" element={<Feed />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Feed" element={<Feed />} />
                <Route path="/Chating" element={<Chating />} />
            </Routes>
        </Router>
    );
}

export default App;

