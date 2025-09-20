import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<><HomePage /></>} />

        {/* Login */}
        <Route path="/login" element={<LoginForm />} />

        {/* Sign Up */}
        <Route path="/signup" element={<SignupForm />} />

        {/* Privacy Policy */}
        <Route path="/privacy" element={<Privacy />} />

        {/* Terms & Conditions */}
        <Route path="/terms" element={<Terms />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
