

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function HeroSection() {
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     e.preventDefault();
//     navigate("/Courses");
//   };

//   return (
//     <div
//       className="w-full min-h-screen  sm:text-xl  sm:h-1/2
//       bg-[linear-gradient(120deg,_#2563eb,_#a855f7,_#16a34a)]
//       grid sm:grid-cols-1 lg:grid-cols-2 
//       overflow-hidden  " // 👈 Prevent scroll
//     >
//       {/* Left Section */}
//       <div className="max-w-7xl mx-10 px-8 py-20 flex flex-col justify-center">
//         <h1 className="text-5xl font-semibold text-white leading-tight sm:text-4xl">
//           Transform Your Career <br /> With <br />
//           <span
//             className="text-4xl  font-bold bg-gradient-to-r from-blue-600
//            via-purple-400 to-green-500 bg-clip-text text-transparent"
//           >
//             Modern Learning
//           </span>
//         </h1>

//         <p className="text-white mt-4">
//           Master in-demand skills through our comprehensive online and offline
//           courses. Join 50,000+ students already advancing their careers with
//           expert-led training in Python, Web Development, Cybersecurity,
//           Finance, and Robotics.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 mt-8">
//           <button
//             className="flex items-center justify-center px-6 py-3 font-bold text-white 
//               bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl rounded-2xl 
//               transition duration-500 transform hover:scale-[1.05]"
//           >
//             Start Learning Today
//           </button>
//           <button
//             onClick={handleChange}
//             className="text-white flex items-center justify-center px-6 py-3 font-bold 
//              bg-blue-700 shadow-2xl rounded-2xl transition duration-300 transform hover:scale-[1.05]"
//           >
//             Explore Courses
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center justify-center p-4">
//         <img
//           className="w-full h-auto max-w-md lg:max-w-lg rounded-2xl object-cover 
//          hover:scale-[1.05] duration-300"
//           src="https://img.freepik.com/premium-photo/design-fist-pump-night-with-game-developer-people-office-deadline-celebration-success-creative-motivation-support-with-man-woman-programmer-team-workplace-complete-task_590464-503689.jpg"
//           alt="student photo"
//         />
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleExplore = (e) => {
    e.preventDefault();
    navigate("/Courses");
  };

  return (
    <section
      className="
        w-full 
        min-h-[60vh] md:min-h-[80vh] lg:min-h-screen
          bg-[linear-gradient(120deg,_#2563eb,_#a855f7,_#16a34a)]

        flex flex-col-reverse lg:flex-row 
        items-center justify-center 
        px-6 md:px-12 lg:px-20 py-10
        text-white overflow-hidden
      "
    >
      {/* Left Section - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Transform Your Career <br /> with{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
            Modern Learning
          </span>
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-gray-100 max-w-xl mx-auto lg:mx-0 mb-8">
          Learn the most in-demand skills with our expert-led online and offline
          courses. Join 50,000+ learners mastering Web Development, Python,
          Cybersecurity, Finance, and Robotics — all designed to boost your
          career growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-[1.05] hover:shadow-xl transition-transform duration-300">
            Start Learning Today
          </button>
          <button
            onClick={handleExplore}
            className="px-8 py-3 rounded-xl font-semibold border border-white hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="https://img.freepik.com/premium-photo/design-fist-pump-night-with-game-developer-people-office-deadline-celebration-success-creative-motivation-support-with-man-woman-programmer-team-workplace-complete-task_590464-503689.jpg"
          alt="Students Learning"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl shadow-2xl object-cover hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
    </section>
  );
}
