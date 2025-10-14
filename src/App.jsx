//import { useState } from 'react'
import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import Footer from "./Screen/Footer";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import CourseDetails from "./Components/CourseDetails";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/coursedetails/:id" element={<CourseDetails/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
