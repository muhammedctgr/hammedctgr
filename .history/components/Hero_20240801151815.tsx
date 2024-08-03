import Image from 'next/image';
import profilePic from '../public/profile.png';
import { AiFillDiscord, AiFillGithub, AiFillTwitterSquare, AiFillX } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="bg-gray-900 m-12 mx-8 br  text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-left md:text-left p-8 pt-2 m-14 mt-2">
          <div className="inline-block bg-blue-600 text-black py-1 px-3 mb-4 rounded-md">
            Hi, I’m
          </div>
          <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold">Popoola Muhammed</h1>
          <p className="mt-2  md:text-xl">Full-Stack Developer, I build and manage</p>
          </div>
          <ul className="mt-4 list-disc list-inside whitespace-nowrap">
            <li>Highly Optimized and Responsive <span className="text-blue-600">FRONT-END</span></li>
            <li>Secure and Scalable <span className="text-blue-600">BACKEND-END & DATABASE</span></li>
            <li><span className="text-blue-600">IT</span> Infrastructure</li>
          </ul>
          <div className="mt-6">
            <a href="#contact" className=" underline">Let’s Connect</a>
            <div className="mt-2 flex md:justify-start space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-md">
                <AiFillDiscord size={20} />
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
        <div className="flex-1 p-5">
          <div className="relative w-48 h-48 mx-auto md:w-72 md:h-72 lg:w-96 lg:h-96">
            <Image src={profilePic} alt="Popoola Muhammed" layout="fill" className="rounded-full object-cover animate-upDown" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;