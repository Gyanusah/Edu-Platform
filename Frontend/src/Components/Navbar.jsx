

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  

  return (
    <nav className=" bg-white fixed w-full shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div  className="flex items-center space-x-2">
            <span className="text-blue-500 text-2xl">🎓</span>
            <span className="text-xl font-bold">
              <span className="text-blue-600">Edu</span>
              <span
                
                className="bg-gradient-to-r from-purple-500 to-green-400 text-transparent bg-clip-text"
              >
                Platform
              </span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link className="text-gray-700 hover:text-blue-600" to="/">
              Home
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  to="/courses"
                >
                  Courses
                </Link>
                <Link className="text-gray-700 hover:text-blue-600" to="/about">
                  About
                </Link>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  to="/contact"
                >
                  Contact
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-4 px-4 py-2 rounded-xl 
                  bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                  font-medium hover:opacity-90 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r
                   from-blue-500 to-purple-500 text-white font-medium 
                   hover:opacity-90 transition"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="ml-4 px-4 py-2 rounded-xl 
                  bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                  font-medium hover:opacity-90 transition"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md overflow-hidden transition-all duration-300">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <Link
              className="text-gray-700 hover:text-blue-600"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  to="/courses"
                  onClick={() => setIsOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  to="/about"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="ml-4 px-4 py-2 rounded-xl 
                  bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                  font-medium hover:opacity-90 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  to="/login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition"
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
