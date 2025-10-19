import React from "react";
import { Star } from "lucide-react"; // star icon

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Developer at Microsoft",
    feedback:
      "The Python course completely transformed my career. The instructors are world-class and the projects prepared me for real-world challenges.",
  },
  {
    name: "Maria Garcia",
    role: "Cybersecurity Analyst",
    feedback:
      "Amazing hands-on experience! The offline labs were incredible and gave me the practical skills I needed to land my dream job.",
  },
  {
    name: "David Chen",
    role: "Full Stack Developer",
    feedback:
      "The flexibility to switch between online and offline learning was perfect for my schedule. Highly recommend to anyone looking to upskill!",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Success Stories
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear from our graduates who transformed their careers and achieved
          their goals through our programs.
        </p>

        {/* Testimonials */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 italic mb-4">
                "{testimonial.feedback}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
