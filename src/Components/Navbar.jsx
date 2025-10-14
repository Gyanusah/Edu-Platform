import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // for hamburger icons
// import { useClerk } from "@clerk/clerk-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <nav className="bg-white  fixed  w-full shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-blue-500 text-2xl">🎓</span>
            <span className="text-xl font-bold">
              <span className="text-blue-600">Edu</span>
              <span className="bg-gradient-to-r from-purple-500 to-green-400 text-transparent  bg-clip-text">
                Platform
              </span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link className="text-gray-700 hover:text-blue-600 " to="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/courses">
              Courses
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/about">
              About
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/contact">
              Contact
            </Link>

            <div>
              <button
                onClick={() => openSignIn()}
                className="
              ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition
              "
              >
                Create Account
              </button>
            </div>
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
        <div
          className="md:hidden bg-white shadow-md   overflow-hidden transition-all duration-300 ${
          menuOpen ? max-h-[500px] : max-h-0"
        >
          <div className="px-4 pt-1 pb-2 space-y-2 flex flex-col ">
            <Link className="text-gray-700 hover:text-blue-600 " to="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/courses">
              Courses
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/about">
              About
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
