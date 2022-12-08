import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import SignUpUser from "./pages/UserSignUp";
import LogInUser from "./pages/UserLogIn";
import DoctorDashboard from "./pages/DoctorDashboard";
import SignUpDoctor from "./pages/DoctorSignUp";
import LogInDoctor from "./pages/DoctorLogIn";
import FindDoctor from "./pages/FindDoctor";
import PageNotFound from "./pages/PageNotFound";
import DoctorDetail from "./pages/DoctorDetail";
import UserEditProfile from "./pages/UserEditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup-user" element={<SignUpUser />} />
        <Route path="/login-user" element={<LogInUser />} />
        <Route path="/signup-doctor" element={<SignUpDoctor />} />
        <Route path="/login-doctor" element={<LogInDoctor />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/user-edit-profile" element={<UserEditProfile />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
