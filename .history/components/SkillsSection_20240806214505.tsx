import Image from 'next/image';
import { FC } from 'react';

interface SkillCategory {
  title: string;
  skills: { name: string; }[];
}

const skills: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5",  },
      { name: "CSS", },
      { name: "JavaScript",  },
      { name: "Python", },
      { name: "Rust",  },
      { name: "PHP", },
      { name: "Solidity",  },
      { name: "Typescript",  },
      { name: "MySQL",  },
      { name: "MongoDB", },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", },
      { name: "Express.js",  },
      { name: "Node.js", },
      { name: "Next.js", },
      { name: "Tailwind", },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git",  },
      { name: "GitHub",  },
      { name: "AWS", },
      { name: "DNS", },
      { name: "Firebase", },
      { name: "Figma", },
      { name: "Windows Servers", },
      { name: "Linux Servers",  },
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
    <section className="px-4 py-4 md:px-8 lg:px-12 bg-gptGray text-white">
  <div className="container bg-githubGray rounded-md mx-auto flex flex-col md:flex-row items-start md:px-8">
    <div className="flex-1 p-4 md:p-8">
      {skills.map((category) => (
        <div key={category.title} className="mb-8">
          <h2 className="text-lg md:text-xl font-bold mb-4">{category.title}</h2>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-2 py-1 rounded-md text-sm neumorph`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="flex-1 flex flex-col items-center md:items-end">
      <div className="grid grid-cols-3 md:grid-cols-1 gap-4 p-4 md:p-8">
        {icons.map((src, index) => (
          <div key={index} className="w-10 h-10 md:w-12 md:h-12 relative">
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
