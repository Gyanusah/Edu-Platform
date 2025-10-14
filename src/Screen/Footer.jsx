import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-300'>
      <div
        className="sm:max-w-full w-full lg:h-full sm:h-full  
    grid
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    gap-5
    
    "
      >
        <div className="pt-10  ml-10 space-x-2">
          <span className="text-blue-500 text-2xl">🎓</span>
          <span className="text-xl font-bold">
            <span className="text-blue-600">Edu</span>
            <span className="bg-gradient-to-r from-purple-500 to-green-400 text-transparent  bg-clip-text">
              Platform
            </span>
          </span>
          <p className="">
            Empowering learners worldwide with comprehensive online and offline
            education. Transform your career with our expert-led courses.
          </p>
        </div>

        <div className=" lg:pt-10 sm:ml-10  ">
          <h2 className=" font-black">Quicks Links</h2>
          <p>Browser Courses</p>
          <p>Abouts Us</p>
          <p> Contact</p>
        </div>

        <div className=" lg:pt-10 sm:ml-10  ">
          <h2 className=" font-black">Popular Courses</h2>
          <p>Python Programming</p>
          <p>Wed Development</p>
          <p>Cybersecurity</p>
          <p>Finance & Analytic</p>
        </div>

        <div className=" lg:pt-10 sm:ml-10  ">
          <h2 className=" font-black">Contact Info</h2>
          <p>gyanusah@gmail.com</p>
          <p>8360159981</p>
          <p>123 Education ,nepal,siraha</p>
        </div>
      </div>
      <hr className='w-full mb-1' />
      <div className="w-full m-auto mb-5">
        
        <p className="text-center">© 2025 MyWebsite. All rights reserved. </p>
      </div>
    </div>
  );
}
