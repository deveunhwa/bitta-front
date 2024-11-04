// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calendar1 from "./pages/Calendar1.jsx";
import Jobpost from "./pages/Jobpost";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Calendar1" element={<Calendar1 />} />
                <Route path="/Jobpost" element={<Jobpost />} />
            </Routes>
        </Router>
    );
}

export default App;