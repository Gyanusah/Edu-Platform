

// src/pages/CourseDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { CoursesData } from "./Courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = CoursesData.find((c) => c.id === Number(id));

  if (!course) {
    return <p className="text-center  text-red-500">Course not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto   p-6">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl mt-10"
      />

      <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>

      <div className=" h-60 w-60  shadow-2xl pl-5 rounded-2xl mt-4 space-y-2 text-gray-700">
        <p>
          <strong>Instructor:</strong> {course.instructor}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Mode:</strong> {course.mode}
        </p>
        <p>
          <strong>Students:</strong> {course.students}
        </p>
        <p>
          <strong>Price:</strong> {course.price}
        </p>
        <p>
          <strong>Level:</strong> {course.level}
        </p>
        <p>
          <strong>Category:</strong> {course.category}
        </p>
      </div>

      <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
        Enroll Now
      </button>
      <Link to="/courses" className="text-blue-600 hover:underline  ml-5 ">
        ← Back to Courses
      </Link>
    </div>
  );
}
