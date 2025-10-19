import React from "react";

const ExampleSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* Left content */}
      <div className="bg-blue-100 p-4 rounded">
        <h2 className="text-xl font-bold">Left Column</h2>
        <p>This is the content for the left side.</p>
      </div>

      {/* Right content */}
      <div className="bg-green-100 p-4 rounded">
        <h2 className="text-xl font-bold">Right Column</h2>
        <p>This is the content for the right side.</p>
      </div>

      {/* Paragraph spanning full width */}
      <div className="lg:col-span-2 bg-purple-100 p-4 rounded">
        <p>
          This paragraph spans across both columns on large screens. It combines
          the grid into one full-width section while maintaining the two-column
          layout for the rest of the content.
        </p>
      </div>
    </div>
  );
};

export default ExampleSection;
