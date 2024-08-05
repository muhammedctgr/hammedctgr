import { FC } from 'react';

const SummarySection: FC = () => {
  return (
<section className="px-4 py-16 md:px-8 lg:px-12 bg-gptGray relative overflow-hidden">
  <div className="container bg-githubGray mx-auto flex flex-col md:flex-row justify-between items-start md:px-8 p-4 md:p-8">
    <div className=" mb-8 md:mb-8">
      <div className="mb-4">
        <span className="text-4xl md:text-6xl font-bold">Software</span>
      </div>
      <p className="text-sm md:text-base">
        I'm probably not the typical dev stationed behind a computer, but building state-of-the-art web apps and contemplating layouts is where you'll find me (~^~). I'm committed to creating fluent user experiences while staying fashionable.
      </p>
    </div>
    <div className=" md:mt-64">
      <div className="mb-4">
        <span className="text-4xl md:text-6xl font-bold">Engineering</span>
      </div>
      <p className="text-sm md:text-base">
        In building Web applications, I'm equipped with just the right tools and can absolutely function independently of them to deliver fast, resilient solutions optimized for scalability.
      </p>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-10 left-0 w-8 h-8 md:w-12 md:h-12 border-t-4 border-r-4 border-purple-800"></div>
  <div className="absolute bottom-10 right-0 w-12 h-12 md:w-16 md:h-16 border-b-4 border-l-4 border-purple-800"></div>
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
