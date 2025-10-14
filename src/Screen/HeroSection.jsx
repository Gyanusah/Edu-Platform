import React from "react";
import { useNavigate } from "react-router-dom";
//bg-[linear-gradient(120deg,_#3b82f6,_#b300b3,_#22c55e)]
export default function HeroSection() {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    navigate("/Courses");
  };
  return (
    <div
      className=" h-145 w-full  
    bg-[linear-gradient(120deg,_#2563eb,_#a855f7,_#16a34a)] 
     text-transparent  
      grid
      sm:grid-cols-1
        lg:grid-cols-2
        overflow-auto
        
        
"
    >
      <div
        className="max-w-7xl
        mx-auto
        px-2
        lg:px-8
        py-30
       
        items-center
          ml-20 "
      >
        <h1 className="  text-4xl font-semibold  text-white">
          Transform Your Career <br /> With <br />
          <span
            className="text-4xl  font-bold    bg-gradient-to-r from-blue-600
           via-purple-400 to-green-500
            bg-clip-text  text-transparent  
             "
          >
            Mordern Learning
          </span>
        </h1>

        <p className="text-white">
          Master in-demand skills through our comprehensive online and offline
          courses. Join 50,000+ students already advancing their careers with
          expert-led training in Python, Web Development, Cybersecurity,
          Finance, and Robotics.
        </p>

        <div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0
        sm:space-x-4 mb-10 pt-7"
        >
          <button
            className="flex items-center justify-center px-6 py-3 font-bold  text-white 
              bg-gradient-to-r from-blue-600 to-purple-600     
          shadow-2xl rounded-2xl  transition duration-500 transform hover:scale-[1.05]"
          >
            Start Learning Today
          </button>
          <button
            onClick={handleChange}
            className="text-white flex items-center justify-center px-6 py-3 font-bold 
             bg-blue-700 shadow-2xl  rounded-2xl   transition duration-300 transform hover:scale-[1.05]"
          >
            Explore Course
          </button>
        </div>
      </div>
      <div className="w-100 h-70  sm:w-150  lg:w-120    hover:scale-[1.05] ">
        <img
          className="w-full h-full object-cover rounded-2xl    ml-10  lg:mt-40    "
          src="https://img.freepik.com/premium-photo/design-fist-pump-night-with-game-developer-people-office-deadline-celebration-success-creative-motivation-support-with-man-woman-programmer-team-workplace-complete-task_590464-503689.jpg"
          alt="student photo "
        />
      </div>
    </div>
  );
}
