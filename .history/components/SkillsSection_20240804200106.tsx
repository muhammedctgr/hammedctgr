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
    
  );
};

export default SkillsSection;
