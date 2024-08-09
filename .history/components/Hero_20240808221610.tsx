import Image from 'next/image';
import profilePic from '../public/profile.png';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillX } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="bg-gptGray px-4 py-4 md:pt-8 md:px-8 lg:px-12 text-white flex items-center">
  <div className="container bg-githubGray shadow-lg rounded-md mx-auto flex flex-col md:flex-row items-center md:px-8">
    <div className="flex-1 text-left p-4 md:p-8">
      <div className="inline-block bg-blue-600 text-black py-1 px-3 mb-4 rounded-md">
        Hi, I’m
      </div>
      <div className="mb-6">
        <h1 className="text-xl md:text-3xl font-bold">Popoola Muhammed</h1>
        <p className="mt-2 text-lg md:text-xl">Full-Stack Developer, I build and manage</p>
      </div>
      <ul className="mt-4 list-disc list-inside text-sm md:text-base">
        <li>Highly Optimized and Responsive <span className="text-blue-600">FRONT-END</span></li>
        <li>Secure and Scalable <span className="text-blue-600">BACK-END & DATABASE</span></li>
        <li><span className="text-blue-600">IT</span> Infrastructure</li>
      </ul>
      <div className="mt-6">
        <a href="#contact" className="underline">Let’s Connect</a>
        <div className="mt-2 flex justify-start space-x-4">
          <a href="#" className="bg-blue-600 p-2 rounded-md">
            <AiFillLinkedin size={20} />
          </a>
          <a href="#" className="bg-blue-600 p-2 rounded-md">
            <AiFillTwitterSquare size={20} />
          </a>
          <a href="#" className="bg-blue-600 p-2 rounded-md">
            <AiFillGithub size={20} />
          </a>
        </div>
      </div>
    </div>
    <div className="flex-1 p-4 md:p-8">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="right-4 w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 bg-gptGray rounded-md animate-bounce shadow-deep-all" />
      <div className="relative w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto">
        <Image src={profilePic} alt="Popoola Muhammed" layout="fill" className="rounded-full object-cover animate-upDown" />
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;