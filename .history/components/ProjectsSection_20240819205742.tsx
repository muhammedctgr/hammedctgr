import { FC } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  status: string;
  images: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Atease",
    description: "Atease is a major oil, gas and auto company that deals in all kinds of affordable crude and auto products.",
    technologies: ["HTML", "CSS", "Bootstrap", "Node.js", "Javascript"],
    date: "2023",
    status: "Completed",
    images: ["at1.jpg", "at2.jpg", "at3.jpg",],
    link: "https://ateasegroup.com",
  },
  {
    title: "mydecors",
    description: "This is a fullstack eCommerce app where customers can search, check information and order for affordable interior design items, which will be delivered to their doorsteps seamlessly",
    technologies: ["Next.js", "Tailwind", "Node.js", "MongoDB", "Firebase"],
    date: "2023",
    status: "Development",
    images: ["dec1.jpg", "dec2.jpg",],
    link: "https://mydecors-prod.vercel.app/",
  },
  {
    title: "Super Task Timer",
    description: "Effortlessly manage your tasks, track time spent, and stay on top of deadlines. Streamline your workflow and boost efficiency..",
    technologies: ["Next.js", "Typescript", "Node.js", "HarperDB", "Tailwind"],
    date: "2023",
    status: "Completed",
    images: ["sp1.jpg", "sp2.jpg",],
    link: "https://super-task-timer-5o5i.vercel.app/",
  },
  
  {
    title: "Map data across the Globe",
    description: "This is an advanced map data across the the globe that shows infographic on specific locations",
    technologies: ["HTML", "SCSS","Javascript", "D3.js",],
    date: "2023",
    status: "Completed",
    images: ["md1.jpg", "md2.jpg",],
    link: "https://codepen.io/6ix-ville/full/NWaxaZR",
  },
  {
    title: "Calculator",
    description: "This is advanced javascript calculator.",
    technologies: ["HTML", "SCSS", "Javascript",],
    date: "2021",
    status: "Completed",
    images: ["calc2.jpg", "calc1.jpg", "at1.jpg",],
    link: "https://codepen.io/6ix-ville/full/zYEOQex",
  },
];

const ProjectsSection: FC = () => {
  return (
    <section className="bg-gptGray md:px-8 px-4 py-4 lg:px-12">
      <div className="container bg-githubGray rounded-md mx-auto md:px-8">
        <h2 className="text-2xl font-bold text-white p-4">Projects and Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gptGray rounded-lg overflow-hidden shadow-deep-all transform transition-transform duration-300 hover:scale-105 ">
              <div className="relative w-full h-48 overflow-hidden">
                <div className="absolute inset-0 flex animate-slide infinite-scroll">
                  {project.images.map((image, i) => (
                    <img key={i} src={image} alt={`${project.title} image ${i + 2}`} className="w-full h-full object-cover shadow-deep-all" />
                  ))}
                </div>
                <span className={`shadow-deep-all absolute top-2 right-2 text-xs text-white px-2 py-1 rounded-md ${project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                  {project.status}
                </span>
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
