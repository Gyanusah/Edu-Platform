
import React from "react";
import CourseCard from "./CourseCard";

 export const CoursesData = [
  {
    id: 1,
    image: "https://ucarecdn.com/aa29bd64-20d5-47eb-878b-928ee201e0b4/",
    category: "Programming",
    level: "Beginner",
    title: "Python Programming Fundamentals",
    description:
      "Master Python from basics to advanced concepts. Perfect for beginners starting their programming journey.",
    instructor: "Dr. Sarah Chen",
    duration: "12 weeks",
    students: "15,420",
    rating: 4.8,
    price: "$299",
    mode: "Hybrid",
  },
  {
    id: 2,
    image:
      "https://codemithra.com/wp-content/uploads/2024/07/What-is-a-Full-Stack-Developer-jpg.webp",
    category: "Web Development",
    level: "Intermediate",
    title: "Full Stack Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js and build modern web applications from scratch.",
    instructor: "Michael Rodriguez",
    duration: "16 weeks",
    students: "22,100",
    rating: 4.9,
    price: "$449",
    mode: "Online",
  },
  {
    id: 3,
    image: "https://www.bitlyft.com/hubfs/Cybersecurity-solutions.jpeg",
    category: "Cybersecurity",
    level: "Advanced",
    title: "Cybersecurity Essentials",
    description:
      "Comprehensive cybersecurity training covering ethical hacking, network security, and threat detection.",
    instructor: "James Wilson",
    duration: "14 weeks",
    students: "8,950",
    rating: 4.7,
    price: "$399",
    mode: "Offline",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEL_IkaP2aD6XwQkj9Lzj7pKeQ_3WTHUPujg&s",
    category: "Finance",
    level: "Intermediate",
    title: "Finance & Data Analytics",
    description:
      "Learn financial modeling, data analysis, and investment strategies using Python and Excel.",
    instructor: "Emily Thompson",
    duration: "10 weeks",
    students: "13,420",
    rating: 4.8,
    price: "$399",
    mode: "Hybrid",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyZQnKcgoKMg67M-IaWFmvVd4Bh-6hd2xQg&s",
    category: "Robotics",
    level: "Advanced",
    title: "Robotics & AI Fundamentals",
    description:
      "Explore robotics, machine learning, and AI concepts through hands-on projects and simulations.",
    instructor: "Dr. Alan Park",
    duration: "18 weeks",
    students: "13,420",
    rating: 4.8,
    price: "$599",
    mode: "Offline",
  },
  {
    id: 6,
    image: "https://pbainst.in/PBA%20Syllabus/assets/images/blog/default/DS_Python.jpg",

    category: "Data Science",
    level: "Intermediate",
    title: "Data Science with Python",
    description:
      "Learn how to analyze, visualize, and model data using Python libraries such as Pandas, NumPy, and Matplotlib. Perfect for aspiring data analysts and scientists.",
    instructor: "Dr. Olivia Brown",
    duration: "15 weeks",
    students: "19,850",
    rating: 4.9,
    price: "$499",
    mode: "Online",
  },
];

export default function Courses() {
  return (
    <section className="py-16 bg-gray-50 relative z-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold bg-gradient-to-r from-blue-600
           via-purple-400 to-green-500
            bg-clip-text text-transparent"
          >
            Explore Our Courses
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive selection of courses designed to
            advance your career and expand your skills in today's most in-demand
            fields.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CoursesData?.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </div>
    </section>
  );
}
