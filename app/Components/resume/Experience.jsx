import React from "react";

const Experience = () => {
  const educationData = [
    {
      title: "Assistant Engineer",
      university: "Shaheed Monsur Ali Medical College Hospital",
      year: "Oct-21 – Nov 2024 (3 years)",
      description:
        "information Technology Department",
    },
    {
      title: "Executive",
      university: "Shin-Shin Japan Hospital Foundation",
      year: "Aug 2016 – Oct 2021 (5 years)",
      description:
        "Accounts and Finance Department",
    },
    {
      title: "Master Degree",
      university: "Harvard University",
      year: "2012 - 2015",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
    },
  ];

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
        <div className="border-l-2 border-green">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-neutral-900 p-6 mb-4 border-b border-neutral-800"
            >
              {/* Left Green Icon */}
              <div className="absolute -left-[-5px] top-8.5 w-3 h-3 bg-green rotate-45"></div>
              <div className="absolute -left-[10px] top-8 w-5.5 h-4 bg-green"></div>

              <h3 className="text-lg font-bold text-white">{edu.title}</h3>
              <p className="text-gray-400 text-sm">
                {edu.university} / {edu.year}
              </p>
              <p className="text-gray-400 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
