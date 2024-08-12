import { FC } from 'react';

const SummarySection: FC = () => {
  return (
<section className="px-4 py-4 md:px-8 lg:px-12 bg-gptGray relative overflow-hidden">
  <div className="container bg-githubGray mx-auto flex rounded-md flex-col md:flex-row justify-between items-start md:px-4 p-4 md:p-8">
    <div className=" mb-8 md:mb-8">
      <div className="mb-4">
        <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Software</span>
      </div>
      <p className="text-sm md:text-base">
        I'm ppprobably not the typical dev stationed behind a computer, but building state-of-the-art web apps, optimizing performance for scale and avoiding downtime is where you'll find me.
      </p>  
    </div>
    <div className=" md:mt-48">
      <div className="mb-4">
        <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Engineering</span>
      </div>
      <p className="text-sm md:text-base">
        In building Web applications, I'm equipped with just the right tools and can absolutely function independently of them to deliver fast, resilient solutions optimized for scalability.
      </p>
    </div>
  </div>
</section>
  );
};

export default SummarySection;
