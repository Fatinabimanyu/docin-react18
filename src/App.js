import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/UserSignUp";
import DoctorDashboard from "./pages/DoctorDashboard";
import LogIn from "./pages/UserLogIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
