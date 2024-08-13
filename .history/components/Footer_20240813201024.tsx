import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillX } from 'react-icons/ai';

const Footer = () => {
    return ( 
        <div className="bg-gptGray px-4 py-4 md:pt-8 md:px-8 lg:px-12">
            <div className='bg-gptGray px-4 py-4 md:pt-8 md:px-12 text-sm'>
                <p>
                <span className='text-2xl'>&#128187;</span> with <span className='text-2xl animate-pulse'>&#128150;</span> by <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>hammedctgr</span> for <a href="https://6ixville.github.io/" target="_blank" rel="noopener noreferrer" className='underline'>6ixville Inc.</a>
                </p>
                <div className="">
                    <div className=" flex justify-center space-x-4">
                        <a href="#" className="bg-blue-600 p-2 rounded-md shadow-deep-all">
                            <AiFillLinkedin size={20} />
                        </a>
                        <a href="#" className="bg-githubGray p-2 rounded-md shadow-deep-all">
                            <AiFillTwitterSquare size={20} />
                        </a>
                        <a href="#" className="bg-githubGray p-2 rounded-md shadow-deep-all">
                            <AiFillGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
       </div>
     );
}
 
export default Footer;