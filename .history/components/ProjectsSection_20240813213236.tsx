import { FC } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  status: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Atease",
    description: "Atease is a major oil and gas company that deals in all kinds crude products.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2024",
    status: "Completed",
    image: "pic1.jpg",
    link: "https://ateasegroup.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    image: "pic1.jpg",
    link: "https://example.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    image: "pic1.jpg",
    link: "https://example.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    image: "pic1.jpg",
    link: "https://example.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    image: "pic1.jpg",
    link: "https://example.com",
  },
  // Add more projects as needed...
];

const ProjectsSection: FC = () => {
  return (
    <section className="bg-gptGray md:px-8 px-4 py-4 lg:px-12">
      <div className="container bg-githubGray rounded-md mx-auto md:px-8 ">
        <h2 className="text-2xl font-bold text-white p-4">Projects and Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gptGray rounded-lg overflow-hidden shadow-deep-all">
              <div className="relative w-full h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover shadow-deep-all rounded-md" />
                <span className="shadow-deep-all absolute top-2 right-2 bg-green-500 text-xs text-white px-2 py-1 rounded-md">{project.status}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-githubGray shadow-deep-all text-green-300 text-xs px-2 py-1 rounded-md">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{project.date}</span>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">website link</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
