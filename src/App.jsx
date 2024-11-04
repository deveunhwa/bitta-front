// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calendar1 from "./pages/Calendar1.jsx";
import Jobpost from "./pages/JobPost.jsx";
import Feed from './pages/Feed/Feed.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Calendar1" element={<Calendar1 />} />
                <Route path="/Jobpost" element={<Jobpost />} />
                <Route path="/Feed" element={<Feed />} />
            </Routes>
        </Router>
    );
}

export default App;