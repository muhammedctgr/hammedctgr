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
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    images: ["pic1.jpg", "pic1.jpg", "pic1.jpg"],
    link: "https://example.com",
  },
  {
    title: "Trumart",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    images: ["pic1.jpg", "pic1.jpg",],
    link: "https://example.com",
  },
  {
    title: "",
    description: "Trumart is a web2 marketplace that processes payment in web3, allowing minting of products as NFTs and more. Designed and developed by me.",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
    date: "2023",
    status: "Completed",
    images: ["pic1.jpg", "pic1.jpg",],
    link: "https://example.com",
  },
  {
    title: "Calculator",
    description: "This is advanced javascript calculator.",
    technologies: ["React.js", "Express.js", "Node.js",],
    date: "2021",
    status: "Completed",
    images: ["calc2.jpg", "calc1.jpg", "at1.jpg",],
    link: "https://codepen.io/6ix-ville/full/zYEOQex",
  },
  // Add more projects as needed...
];



export default ProjectsSection;
