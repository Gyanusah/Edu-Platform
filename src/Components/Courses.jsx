

// import { Star, Users, Clock, Globe } from "lucide-react";

// const courses = [
//   {
//     id: 1,
//     image: "https://ucarecdn.com/aa29bd64-20d5-47eb-878b-928ee201e0b4/",
//     category: "Programming",
//     level: "Beginner",
//     title: "Python Programming Fundamentals",
//     description:
//       "Master Python from basics to advanced concepts. Perfect for beginners starting their programming journey.",
//     instructor: "Dr. Sarah Chen",
//     duration: "12 weeks",
//     students: "15,420",
//     rating: 4.8,
//     price: "$299",
//     mode: "Hybrid",
//   },
//   {
//     id: 2,
//     image:
//       "https://codemithra.com/wp-content/uploads/2024/07/What-is-a-Full-Stack-Developer-jpg.webp",
//     category: "Web Development",
//     level: "Intermediate",
//     title: "Full Stack Web Development",
//     description:
//       "Learn HTML, CSS, JavaScript, React, Node.js and build modern web applications from scratch.",
//     instructor: "Michael Rodriguez",
//     duration: "16 weeks",
//     students: "22,100",
//     rating: 4.9,
//     price: "$449",
//     mode: "Online",
//   },
//   {
//     id: 3,
//     image: "https://www.bitlyft.com/hubfs/Cybersecurity-solutions.jpeg",
//     category: "Cybersecurity",
//     level: "Advanced",
//     title: "Cybersecurity Essentials",
//     description:
//       "Comprehensive cybersecurity training covering ethical hacking, network security, and threat detection.",
//     instructor: "James Wilson",
//     duration: "14 weeks",
//     students: "8,950",
//     rating: 4.7,
//     price: "$399",
//     mode: "Offline",
//   },
//   {
//     id: 4,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEL_IkaP2aD6XwQkj9Lzj7pKeQ_3WTHUPujg&s",
//     category: "finance",
//     level: "intermediate",
//     title: "Finance & Data Analytics",
//     description:
//       "Learn financial modeling, data analysis, and investment strategies using Python and Excel.",
//     instructor: "Emily Thompson",
//     duration: "10 weeks",
//     students: "13,420",
//     rating: 4.8,
//     price: "$399",
//     mode: "Hybrid",
//   },
//   {
//     id: 5,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyZQnKcgoKMg67M-IaWFmvVd4Bh-6hd2xQg&s",
//     category: "Robotics",
//     level: "Advance",
//     title: "Robotics & AI Fundamentals",
//     description:
//       "Explore robotics, machine learning, and AI concepts through hands-on projects and simulations.",
//     instructor: "Dr. Alan Park",
//     duration: "18 weeks",
//     students: "13,420",
//     rating: 4.8,
//     price: "$599",
//     mode: "offline",
//   },
// ];

// export default function FeaturedCourses() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2
//             className="text-4xl font-bold bg-gradient-to-r from-blue-600
//            via-purple-400 to-green-500
//             bg-clip-text text-transparent  
//               "
//           >
//             Explore Our Courses
//           </h2>
//           <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
//             Choose from our comprehensive selection of courses designed to
//             advance your career and expand your skills in today's most in-demand
//             fields.
//           </p>
//         </div>

//         {/* Course Cards */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 {/* Category Tag */}
//                 <span className="absolute top-2 left-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
//                   {course.category}
//                 </span>
//                 {/* Level */}
//                 <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
//                   {course.level}
//                 </span>
//                 {/* Price */}
//                 <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
//                   {course.price}
//                 </span>
//               </div>

//               {/* Course Info */}
//               <div className="p-5">
//                 {/* Rating */}
//                 <div className="flex items-center text-yellow-500 text-sm font-medium">
//                   <Star size={16} className="mr-1 fill-yellow-500" />
//                   {course.rating}
//                 </div>

//                 <h3 className="mt-1 text-lg font-semibold text-gray-900">
//                   {course.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1 line-clamp-2">
//                   {course.description}
//                 </p>

//                 <p className="mt-2 text-sm text-gray-500">
//                   Instructor:{" "}
//                   <span className="font-medium">{course.instructor}</span>
//                 </p>

//                 {/* Meta Info */}
//                 <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
//                   <span className="flex items-center">
//                     <Clock size={16} className="mr-1" /> {course.duration}
//                   </span>
//                   <span className="flex items-center">
//                     <Users size={16} className="mr-1" /> {course.students}{" "}
//                     students
//                   </span>
//                 </div>

//                 {/* Mode */}
//                 <div className="flex items-center text-sm text-gray-500 mt-2">
//                   <Globe size={16} className="mr-1" />
//                   {course.mode}
//                 </div>

//                 {/* Button */}
//                 <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
//                   View Course
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Star, Users, Clock, Globe } from "lucide-react";

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
];

export default function FeaturedCourses() {
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
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
                <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
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
