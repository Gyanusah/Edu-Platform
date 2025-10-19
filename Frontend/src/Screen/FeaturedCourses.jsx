import React from "react";
import CourseCard from "../Components/Course/CourseCard";
import { CoursesData } from "../Components/Course/Courses";

function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50 relative z-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-400 to-green-500 bg-clip-text text-transparent">
            Explore Our Courses
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive selection of courses designed to
            advance your career and expand your skills in today's most in-demand
            fields.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CoursesData.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
