import Image from 'next/image';
import { FC } from 'react';

interface SkillCategory {
  title: string;
  skills: { name: string; color: string; }[];
}

const skills: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", color: "bg-black" },
      { name: "CSS", color: "bg-black"},
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "Python", color: "bg-green-500" },
      { name: "Rust", color: "bg-orange-600" },
      { name: "PHP", color: "bg-purple-500" },
      { name: "Solidity", color: "bg-black-500" },
      { name: "Typescript", color: "bg-blue-700" },
      { name: "MySQL", color: "bg-orange-400" },
      { name: "MongoDB", color: "bg-green-600" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", color: "bg-blue-400" },
      { name: "Express.js", color: "bg-green-500" },
      { name: "Node.js", color: "bg-green-700" },
      { name: "Next.js", color: "bg-purple-700" },
      { name: "Tailwind", color: "bg-purple-500" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", color: "bg-orange-500" },
      { name: "GitHub", color: "bg-purple-800" },
      { name: "AWS", color: "bg-yellow-600" },
      { name: "DNS", color: "bg-gray-400" },
      { name: "Firebase", color: "bg-yellow-500" },
      { name: "Figma", color: "bg-pink-600" },
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
    <section className="m-12 mx-8 bg-gray-900 text-white flex sm:justify-start">
      <div className="container mx-auto px-8 flex  ">
        <div className="flex-1 m-12">
          {skills.map((category) => (
            <div key={category.title} className="mb-8">
              <h2 className="text-xl font-bold mb-4">{category.title}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2 py-1 m-1 rounded-md text-sm ${skill.color} shadow-md`}
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