import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const showAlert = (message) => setAlertMsg(message);
  const closeAlert = () => setAlertMsg("");

  const handleLogin = () => {
    if (!email) return showAlert("Please enter your email.");
    showAlert("Logging in with: " + email);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 p-6 font-inter">
      {/* ✅ Logo */}
      <Link to="/" className="mb-6">
        <img src="/assets/Logo.png" alt="Logo" className="h-20 sm:h-24" />
      </Link>

      {/* ✅ Login Card */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md mx-4 transition-all duration-300 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          Welcome Back!
        </h1>

        {/* Google Login */}
        <a
          href="https://qr-code.io/login/google-initiate"
          className="flex items-center gap-2 justify-center text-gray-700 font-medium border border-gray-300 px-4 py-3 rounded-xl hover:bg-gray-50 transition"
        >
          <img src="/assets/google-icon.png" alt="Google" className="h-5 w-5" />
          Sign in with Google
        </a>

        {/* Divider */}
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-700 text-sm">
            Or, log in with your email
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white font-bold rounded-xl px-4 py-3 shadow-md hover:bg-blue-700 transition"
        >
          Log In
        </button>

        {/* Toggle to Signup */}
        <div className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline ml-1">
            Sign up
          </Link>
        </div>
      </div>

      {/* ✅ Custom Alert */}
      {alertMsg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
            <p className="text-gray-800">{alertMsg}</p>
            <button
              onClick={closeAlert}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
