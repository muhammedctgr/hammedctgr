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
    title: "AutoStoreOnline",
    description: "AutoStoreOnline is a store for those looking for their next car. The website features a dealership dashboard displaying inventories that can be done in minutes. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2024",
    status: "Completed",
    image: "/public/pic1.jpg",
    link: "https://example.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    image: "/images/trumart.jpg",
    link: "https://example.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    image: "/images/trumart.jpg",
    link: "https://example.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    image: "/images/trumart.jpg",
    link: "https://example.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    image: "/images/trumart.jpg",
    link: "https://example.com",
  },
  // Add more projects as needed...
];

const ProjectsSection: FC = () => {
  return (
    <section className="bg-gptGray py-16">
      <div className="container bg-githubGray mx-auto px-4 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-githubGray rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <span className="absolute top-2 right-2 bg-green-500 text-xs text-white px-2 py-1 rounded-md">{project.status}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gptGray text-white text-xs px-2 py-1 rounded-md shadow-lg">{tech}</span>
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
