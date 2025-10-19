import React from "react";
import { Star, Users, Clock, Globe } from "lucide-react";

function CourseCard({ course }) {
  return (
    <div className="mt-5">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        {/* Image Section */}
        <div className="relative overflow-hidden z-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover transform group-hover:-translate-y-2 transition-transform duration-500 ease-out"
          />
          {/* Category Tag */}
          <span className="absolute top-2 left-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
            {course.category}
          </span>
          {/* Level Tag */}
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            {course.level}
          </span>
          {/* Price Tag */}
          <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
            {course.price}
          </span>
        </div>

        {/* Course Info */}
        <div className="p-5">
          <div className="flex items-center text-yellow-500 text-sm font-medium">
            <Star size={16} className="mr-1 fill-yellow-500" />
            {course.rating}
          </div>

          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            {course.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {course.description}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Instructor: <span className="font-medium">{course.instructor}</span>
          </p>

          <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
            <span className="flex items-center">
              <Clock size={16} className="mr-1" /> {course.duration}
            </span>
            <span className="flex items-center">
              <Users size={16} className="mr-1" /> {course.students} students
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-500 mt-2">
            <Globe size={16} className="mr-1" />
            {course.mode}
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
