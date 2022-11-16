import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
