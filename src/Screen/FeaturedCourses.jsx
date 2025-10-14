import { Star, Users, Clock, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
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
];

export default function FeaturedCourses() {
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Start your learning journey with our most popular and highly-rated
            courses, designed by industry experts and loved by students
            worldwide.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {/* Category Tag */}
                <span className="absolute top-2 left-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                  {course.category}
                </span>
                {/* Level */}
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  {course.level}
                </span>
                {/* Price */}
                <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {course.price}
                </span>
              </div>

              {/* Course Info */}
              <div className="p-5">
                {/* Rating */}
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
                  Instructor:{" "}
                  <span className="font-medium">{course.instructor}</span>
                </p>

                {/* Meta Info */}
                <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Users size={16} className="mr-1" /> {course.students}{" "}
                    students
                  </span>
                </div>

                {/* Mode */}
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Globe size={16} className="mr-1" />
                  {course.mode}
                </div>

                {/* Button */}
                <button   className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
                 
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
