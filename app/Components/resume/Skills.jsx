import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "React JS", level: 90 },
    { name: "Web Design", level: 80 },
    { name: "Express.js", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
  ];

  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full">
        <p className="text-gray-400 text-sm mb-2">
          My level of knowledge in some tools
        </p>
        <h2 className="text-3xl font-bold text-white mb-8">My Skills</h2>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-white">{skill.name}</span>
                <span className="text-white">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded">
                <div
                  className="bg-green h-2 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;