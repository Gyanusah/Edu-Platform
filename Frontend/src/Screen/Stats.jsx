import React from "react";

const Stats = () => {
  const stats = [
    { value: "50K+", label: "Happy Students" },
    { value: "500+", label: "Expert Courses" },
    { value: "200+", label: "Industry Experts" },
    { value: "95%", label: "Success Rate" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
