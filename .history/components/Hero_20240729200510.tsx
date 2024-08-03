import Image from 'next/image';
import profilePic from '../public/profile.png';
import { AiFillDiscord, AiFillGithub, AiFillTwitterSquare, AiFillX } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left p-5">
          <div className="inline-block bg-blue-600 text-black py-1 px-3 mb-4 rounded-md">
            Hi, I’m
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Popoola Muhammed</h1>
          <p className="mt-2 text-lg md:text-xl">I am a Full-Stack Developer, I build and manage</p>
          <ul className="mt-4 list-disc list-inside">
            <li>Highly Optimized and Responsive <span className="text-blue-600">FRONT-END</span></li>
            <li>Secure and Scalable <span className="text-blue-600">BACKEND-END & DATABASE</span></li>
            <li><span className="text-blue-600">IT</span> Infrastructure</li>
          </ul>
          <div className="mt-6">
            <a href="#contact" className=" underline">Let’s Connect</a>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <AiFillDiscord size={2} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <AiFillTwitterSquare size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <AiFillGithub size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 p-5">
          <div className="relative w-48 h-48 mx-auto md:w-72 md:h-72 lg:w-96 lg:h-96">
            <Image src={profilePic} alt="Popoola Muhammed" layout="fill" className="rounded-full object-cover" />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <AiFillTwitterSquare size={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;