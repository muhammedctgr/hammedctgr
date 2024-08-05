import { FC } from 'react';

const SummarySection: FC = () => {
  return (
<section className="px-4 py-4 md:px-8 lg:px-12 bg-gptGray relative overflow-hidden">
  <div className="container bg-githubGray mx-auto flex flex-col md:flex-row justify-between items-start md:px-8 p-4 md:p-8">
    <div>
      
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
