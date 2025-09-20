import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="relative w-full flex justify-center">
      <div className="ellipse-navbar"></div>
       
      <header className="w-full px-2 flex justify-between items-center bg-transparent">
       
           {/* Logo */}
        <Link to="/" className="flex items-center">
        <img src="/assets/Logo.png" alt="Logo" className="h-40" />
      </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-8 px-10">
          
          <Link
            to="/login"
            className="text-black hover:text-gray-700 font-semibold transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-cyan-800 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-full transition-colors"
          >
            Sign Up
          </Link>

          {/* Test 404
          <Link
            to="/random-wrong-page"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition-colors"
          >
            Test 404
          </Link> */}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
