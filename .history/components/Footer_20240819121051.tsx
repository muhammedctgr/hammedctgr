import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillX } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <div className="bg-gptGray px-4 py-4 md:pt-4 md:px-4 lg:px-12">
            <div className='bg-gptGray px-4 py-4 md:pt-8 md:px-12 text-sm'>
                <p className="whitespace-nowrap">
                <span className='text-2xl'>&#128187;</span><span className='text-xs'> by</span> <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>hammedctgr</span><span className='text-xs'> under the license of </span><a href="https://6ixville.github.io/" target="_blank" rel="noopener noreferrer" className='underline'>6ixville Inc.</a>
                </p>
                <div className="">
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="bg-blue-600 p-2 rounded-md shadow-deep-all transform transition-transform duration-300 hover:scale-110">
                            <AiFillLinkedin size={20} />
                        </a>
                        <a href="#" className="bg-githubGray p-2 rounded-md shadow-deep-all transform transition-transform duration-300 hover:scale-110">
                            <AiFillTwitterSquare size={20} />
                        </a>
                        <a href="https://github.com/muhammedctgr" className="bg-githubGray p-2 rounded-md shadow-deep-all transform transition-transform duration-300 hover:scale-110">
                            <AiFillGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
       </div>
     );
}
 
export default Footer;