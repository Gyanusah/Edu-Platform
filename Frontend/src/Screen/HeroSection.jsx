

import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    navigate("/Courses");
  };

  return (
    <div
      className="w-full min-h-screen 
      bg-[linear-gradient(120deg,_#2563eb,_#a855f7,_#16a34a)]
      grid sm:grid-cols-1 lg:grid-cols-2 
      overflow-hidden  " // 👈 Prevent scroll
    >
      {/* Left Section */}
      <div className="max-w-7xl mx-10 px-8 py-20 flex flex-col justify-center">
        <h1 className="text-5xl font-semibold text-white leading-tight">
          Transform Your Career <br /> With <br />
          <span
            className="text-4xl font-bold bg-gradient-to-r from-blue-600
           via-purple-400 to-green-500 bg-clip-text text-transparent"
          >
            Modern Learning
          </span>
        </h1>

        <p className="text-white mt-4">
          Master in-demand skills through our comprehensive online and offline
          courses. Join 50,000+ students already advancing their careers with
          expert-led training in Python, Web Development, Cybersecurity,
          Finance, and Robotics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            className="flex items-center justify-center px-6 py-3 font-bold text-white 
              bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl rounded-2xl 
              transition duration-500 transform hover:scale-[1.05]"
          >
            Start Learning Today
          </button>
          <button
            onClick={handleChange}
            className="text-white flex items-center justify-center px-6 py-3 font-bold 
             bg-blue-700 shadow-2xl rounded-2xl transition duration-300 transform hover:scale-[1.05]"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center p-4">
        <img
          className="w-full h-auto max-w-md lg:max-w-lg rounded-2xl object-cover 
         hover:scale-[1.05] duration-300"
          src="https://img.freepik.com/premium-photo/design-fist-pump-night-with-game-developer-people-office-deadline-celebration-success-creative-motivation-support-with-man-woman-programmer-team-workplace-complete-task_590464-503689.jpg"
          alt="student photo"
        />
      </div>
    </div>
  );
}
