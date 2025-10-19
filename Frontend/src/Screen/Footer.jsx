

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-300">
      {/* Top Section */}
      <div
        className="max-w-7xl mx-auto px-6 py-12 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-3xl">🎓</span>
            <h2 className="text-2xl font-bold">
              <span className="text-blue-500">Edu</span>
              <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering learners worldwide with comprehensive online and offline
            education. Transform your career with our expert-led courses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">
              Browse Courses
            </li>
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Popular Courses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Popular Courses
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">
              Python Programming
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Cybersecurity
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Finance & Analytics
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Info
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:gyanusah@gmail.com"
                className="hover:text-blue-400"
              >
                gyanusah@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:8360159981" className="hover:text-blue-400">
                8360159981
              </a>
            </li>
            <li>Address: 123 Education, Siraha, Nepal</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="text-center py-4 text-sm text-gray-400">
        © 2025 EduPlatform. All rights reserved.
      </div>
    </footer>
  );
}
