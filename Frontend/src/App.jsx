

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Footer from "./Screen/Footer";
// import Home from "./Components/Home";
// import Courses from "./Components/Course/Courses";
// import Contact from "./Components/Contact";
// import AboutPage from "./Components/AboutPage";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";

// import PrivateRoute from "./Components/PrivateRoute";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />

//         {/* Private routes */}
//         <Route
//           path="/courses"
//           element={
//             <PrivateRoute>
//               <Courses />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <PrivateRoute>
//               <Contact />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <PrivateRoute>
//               <AboutPage />
//             </PrivateRoute>
//           }
//         />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;



import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Screen/Footer";
import Home from "./Components/Home";
import Courses from "./Components/Course/Courses";
import Contact from "./Components/Contact";
import AboutPage from "./Components/AboutPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            
              <Home />
           
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        {/* Private routes */}

        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <AboutPage />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
