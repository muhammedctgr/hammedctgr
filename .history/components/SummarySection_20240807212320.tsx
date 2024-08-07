import { FC } from 'react';

const SummarySection: FC = () => {
  return (
<section className="px-4 py-4 md:px-8 lg:px-12 bg-gptGray relative overflow-hidden">
  <div className="container bg-githubGray mx-auto flex rounded-md flex-col md:flex-row justify-between items-start md:px-8 p-4 md:p-8">
    <div className=" mb-8 md:mb-8">
      <div className="mb-4">
        <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Software</span>
      </div>
      <p className="text-sm md:text-base">
        I'm probably not the typical dev stationed behind a computer, but building state-of-the-art web apps, optimizing performance for scale and avoiding downtime is where you'll find me.
      </p>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-1/4 h-1/4 bg-gptGray rounded-md animate-bounce shadow-" />

    </div>
    <div className=" md:mt-64">
      <div className="mb-4">
        <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Engineering</span>
      </div>
      <p className="text-sm md:text-base">
        In building Web applications, I'm equipped with just the right tools and can absolutely function independently of them to deliver fast, resilient solutions optimized for scalability.
      </p>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-1/4 right-0 transform translate-x-4 translate-y-4 md:translate-x-12 md:translate-y-8">
    <svg className="fill-current text-purple-200" width="80" height="80" viewBox="0 0 100 100">
      {/* SVG circles */}
      {[...Array(10)].map((_, row) => (
        <g key={row} transform={`translate(0, ${row * 10})`}>
          {[...Array(10)].map((_, col) => (
            <circle key={col} cx={col * 10 + 2} cy="2" r="2" />
          ))}
        </g>
      ))}
    </svg>
  </div>
</section>
  );
};

export default SummarySection;
