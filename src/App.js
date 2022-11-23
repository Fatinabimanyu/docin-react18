import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/UserSignUp";
import DoctorDashboard from "./pages/DoctorDashboard";
import LogIn from "./pages/UserLogIn";
import FindDoctor from "./pages/FindDoctor";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup-user" element={<SignUp />} />
        <Route path="/login-user" element={<LogIn />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
