import Image from 'next/image';
import profilePic from '../public/profile.png'; // Replace this with the actual path to your image
import { AiFillDiscord, AiFillGithub, AiFillTwitterSquare, AiFillX } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left p-5">
          <div className="inline-block bg-green-600 text-black py-1 px-3 mb-4 rounded-full">
            Hi, I’m
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Popoola Muhammed</h1>
          <p className="mt-2 text-lg md:text-xl">I am a Full-Stack Developer</p>
          <ul className="mt-4 list-disc list-inside">
            <li>Highly Optimized and Responsive <span className="text-blue-400">FRONT-END</span></li>
            <li>Secure and Scalable <span className="text-green-400">BACKEND-END & DATABASE</span></li>
            <li><span className="text-purple-400">SMART CONTRACT</span> Development And Integration</li>
          </ul>
          <div className="mt-6">
            <a href="#contact" className="text-green-400 underline">Let’s Connect</a>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full">
                <AiFillDiscord width={32} height={32} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full">
                <AiFillTwitterSquare width={32} height={32} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full">
                <AiFillGithub width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 p-5">
          <div className="relative w-48 h-48 mx-auto md:w-72 md:h-72 lg:w-96 lg:h-96">
            <Image src={profilePic} alt="Popoola Muhammed" layout="fill" className="rounded-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;