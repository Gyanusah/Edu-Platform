import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function Notices() {
  const { isLoggedIn } = useAuth();
  const navigate=useNavigate();
  const handleChange=(e)=>{
    if(isLoggedIn){
    navigate("/Contact")
    }
    else{
      navigate("/login")
    }
  }
  return (
    <div className="h-100 flex items-center justify-center p-4 font-sans bg-gray-50">
      <div
        className="w-full max-w-4xl rounded-2xl shadow-2xl p-8 sm:p-12
         text-white text-center
        bg-gradient-to-r from-indigo-600 via-purple-500 to-green-500   transition-all duration-300
         focus:outline-none focus:ring-4 focus:ring-white/50"
      >
        <h1 className=" font-bold text-2xl pb-5">
          Ready to Start Your Learning Journey?
        </h1>

        <p
          className=" text-base sm:text-lg opacity-90 mb-8
          max-w-2xl mx-auto"
        >
          Join thousands of successful graduates who advanced their careers
          through our comprehensive courses. Your future starts with the next
          step you take today.
        </p>
        <div>
          <button
            className=" shadow-lg bg-white text-blue-500 font-bold rounded-lg  px-8 py-3 
           hover:shadow-xl
//               transform hover:scale-[1.03] transition-all duration-300
//               focus:outline-none focus:ring-4 focus:ring-white/50
//               w-full sm:w-auto
           "
          >
            Join Now -Free Trail{" "}
          </button>

          <button
            onClick={handleChange}
            className="hover:underline p-3 font-semibold"
          >
             Contact Us
          </button>
        </div>
        <p
          className="
          text-xs opacity-80 mt-6
           tracking-wider
           font-bold
         "
        >
          30-day money-back guarantee &bull; No hidden fees &bull; Cancel
          anytime
        </p>
      </div>
    </div>
  );
}


//import React from "react";
// Note: In a real-world project, you would import 'lucide-react' for the check icon.
// We are using an inline SVG here for compatibility in this single-file environment.

// Inline SVG for a checkmark icon
// const CheckIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="mr-2"
//   >
//     <polyline points="20 6 9 17 4 12"></polyline>
//   </svg>
// );

// const App = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 font-sans bg-gray-50">
//       {/*
//         The main CTA banner container.
//         We use a custom gradient defined using Tailwind utility classes.
//         The colors chosen (indigo-600, purple-500, green-500) closely mimic the uploaded image's blue/purple to green fade.
//       */}
//       <div
//         className="
//         w-full max-w-4xl rounded-2xl shadow-2xl p-8 sm:p-12
//         text-white text-center
//         bg-gradient-to-r from-indigo-600 via-purple-500 to-green-500
//         transition-all duration-300
//       "
//       >
//         {/* Title */}
//         <h1
//           className="
//           text-3xl sm:text-4xl font-extrabold mb-4
//           tracking-tight
//         "
//         >
//           Ready to Start Your Learning Journey?
//         </h1>

//         {/* Description */}
//         <p
//           className="
//           text-base sm:text-lg opacity-90 mb-8
//           max-w-2xl mx-auto
//         "
//         >
//           Join thousands of successful graduates who advanced their careers
//           through our comprehensive courses. Your future starts with the next
//           step you take today.
//         </p>

//         {/* Action Row: Button and Secondary Link */}
//         <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
//           {/* Primary Button */}
//           <button
//             onClick={() => console.log("Join Now clicked")}
//             className="
//               flex items-center justify-center
//               px-8 py-3 rounded-full
//               bg-white text-indigo-700
//               font-bold text-lg
//               shadow-lg hover:shadow-xl
//               transform hover:scale-[1.03] transition-all duration-300
//               focus:outline-none focus:ring-4 focus:ring-white/50
//               w-full sm:w-auto
//             "
//           >
//             <CheckIcon />
//             Join Now - Free Trial
//           </button>

//           {/* Secondary Link */}
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               console.log("Contact Us clicked");
//             }}
//             className="
//               text-white font-medium
//               opacity-80 hover:opacity-100 transition-opacity duration-200
//               text-base
//             "
//           >
//             Have questions? Contact us &rarr;
//           </a>
//         </div>

//         {/* Disclaimer Text */}
//         <p
//           className="
//           text-xs opacity-70 mt-6
//           tracking-wider
//         "
//         >
//           30-day money-back guarantee &bull; No hidden fees &bull; Cancel
//           anytime
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;
