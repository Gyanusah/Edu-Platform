import React from "react";
import { Globe, User, Award, Clock, Zap, Book } from "lucide-react"; // icons

const features = [
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Online & Offline Learning",
    description:
      "Choose your preferred learning mode or combine both for maximum flexibility and engagement.",
  },
  {
    icon: <User className="w-8 h-8 text-white" />,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of real-world experience and proven track records.",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Industry Certifications",
    description:
      "Earn recognized certificates that boost your resume and validate your newly acquired skills.",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Flexible Scheduling",
    description:
      "Study at your own pace with self-paced courses or join scheduled classes that fit your lifestyle.",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Hands-On Projects",
    description:
      "Build real-world projects and create an impressive portfolio that showcases your abilities.",
  },
  {
    icon: <Book className="w-8 h-8 text-white" />,
    title: "Lifetime Access",
    description:
      "Get unlimited access to course materials, updates, and community support even after completion.",
  },
];

const Features= () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Why Choose EduPlatform?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We combine the best of traditional and modern education to deliver an
          unparalleled learning experience that fits your lifestyle and goals.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
