import Image from 'next/image';
import { FC } from 'react';

interface SkillCategory {
  title: string;
  skills: { name: string; color: string }[];
}

const skills: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", color: "text-black", color },
      { name: "CSS", color: "bg-gray-900" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "Python", color: "bg-green-500" },
      { name: "Rust", color: "bg-orange-600" },
      { name: "PHP", color: "bg-purple-500" },
      { name: "Solidity", color: "bg-gray-800" },
      { name: "Typescript", color: "bg-blue-700" },
      { name: "MySQL", color: "bg-orange-400" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "Move", color: "bg-blue-900" },
      { name: "T-SOL", color: "bg-gray-600" },
      { name: "Tact", color: "bg-indigo-700" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", color: "bg-blue-400" },
      { name: "Express.js", color: "bg-green-500" },
      { name: "Node.js", color: "bg-green-700" },
      { name: "Ink!", color: "bg-purple-700" },
      { name: "Bootstrap", color: "bg-purple-500" },
      { name: "Angular.js", color: "bg-red-700" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", color: "bg-orange-500" },
      { name: "GitHub", color: "bg-purple-800" },
      { name: "AWS", color: "bg-yellow-600" },
      { name: "Render", color: "bg-blue-900" },
      { name: "Wordpress", color: "bg-blue-600" },
      { name: "DNS", color: "bg-gray-400" },
      { name: "Firebase", color: "bg-yellow-500" },
      { name: "Figma", color: "bg-pink-600" },
      { name: "Workbench", color: "bg-red-700" },
      { name: "Windows Servers", color: "bg-blue-700" },
      { name: "Linux Servers", color: "bg-black" },
    ],
  },
];

const icons = [
  "/icons/html5.svg", // Replace with your icon paths
  "/icons/css3.svg",
  "/icons/javascript.svg",
  "/icons/python.svg",
  // Add the rest of the icons as needed
];

const SkillsSection: FC = () => {
  return (
    <section className="py-10 m-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="flex-1">
          {skills.map((category) => (
            <div key={category.title} className="mb-8">
              <h2 className="text-xl font-bold mb-4">{category.title}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 rounded-full text-sm ${skill.color} shadow-md`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end">
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
            {icons.map((src, index) => (
              <div key={index} className="w-12 h-12 relative">
                <Image src={src} alt={`icon-${index}`} layout="fill" objectFit="contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
