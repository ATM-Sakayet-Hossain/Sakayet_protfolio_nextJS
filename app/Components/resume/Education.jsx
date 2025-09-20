import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Science",
      university: "Presidency University",
      year: "2019 - 2022",
      description:
      "Electrical and Electronic Engineering",
    },
    {
      title: "Diploma Engineering",
      university: "Uttara Engineering College",
      year: "2014 - 2018",
      description:
      "Electrical Engineering",
    },
    {
      title: "Secondary School Certificate",
      university: "Maijdee Technical School & College",
      year: "2013",
      description:
        "General Electrical Technology",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
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

export default Education;
