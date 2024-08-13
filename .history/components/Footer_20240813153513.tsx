import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillX } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <div className="bg-gptGray px-4 py-4 md:pt-8 md:px-8 lg:px-12">
            <div className='bg-gptGray px-4 py-4 md:pt-8 md:px-12 text-sm'>
            <p>
            Portfolio developed and designed by hammedctgr for <a href="#" className='underline'>6ixville Inc.</a>
            </p>
            <div className="">
            <div className="mt-2 flex justify-start space-x-4">
            <a href="#" className="bg-blue-600 p-2 rounded-md">
                <AiFillLinkedin size={20} />
            </a>
            <a href="#" className="bg- p-2 rounded-md">
                <AiFillTwitterSquare size={20} />
            </a>
            <a href="#" className="bg-blue-600 p-2 rounded-md">
                <AiFillGithub size={20} />
            </a>
            </div>
      </div>
        </div>
       </div>
     );
}
 
export default Footer;