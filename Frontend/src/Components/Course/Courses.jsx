
import React ,{useEffect,useState} from "react";
import CourseCard from "./CourseCard";
import { API_URL } from "../../config/api";


export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
       const res = await fetch(`${API_URL}/courses`);


        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("error fetching course", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <p className="text-center mt-20 text-lg">Loading courses...</p>;
  }
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
            advance your career.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No courses found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
