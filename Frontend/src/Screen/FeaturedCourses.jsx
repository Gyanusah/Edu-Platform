import React, { useEffect, useState } from "react";
import CourseCard from "../Components/Course/CourseCard";
import { API_URL } from "../config/api";

function FeaturedCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${API_URL}/courses`);
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-16 bg-gray-50 relative z-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-400 to-green-500 bg-clip-text text-transparent">
            Featured Courses
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            A few top courses you can start today.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.length > 0 ? (
            courses
              .slice(0, 3)
              .map((course) => <CourseCard key={course._id} course={course} />)
          ) : (
            <p className="text-center text-gray-500 col-span-3">Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
