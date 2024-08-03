import { FC } from 'react';

const SummarySection: FC = () => {
  return (
    <section className="m-12 mx-8 bg-gray-900 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 mb-16 md:mb-0 ">
          <div className="mb-4 flex items-center">
            <span className="text-6xl font-bold">Software</span>
          </div>
          <p className="text-sm">
            I'm probably not the typical engineer positioned behind an IDE, but I build. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~^~). I'm committed to creating fluent user experiences while staying fashionable.
          </p>
        </div>
        <div className="md:w-1/2 md:mt-16">

          <p className="text-sm">
            In building Web applications, I'm equipped with just the right tools and can absolutely function independently of them to deliver fast, resilient solutions optimized for scalability.
          </p>
          <div className="mb-4 flex items-center">
            <span className="text-6xl font-bold">Engineering</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-12 h-12 border-t-4 border-r-4 border-purple-800"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-purple-800 rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-16 h-16 border-b-4 border-l-4 border-purple-800"></div>
      <div className="absolute bottom-1/2 right-1/4 w-8 h-8 border-2 border-purple-800 rounded-full"></div>
      <div className="absolute top-1/ right-0 transform translate-x-12 translate-y-8">
        <svg className="fill-current text-purple-200" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="2" cy="2" r="2" />
          <circle cx="12" cy="2" r="2" />
          <circle cx="22" cy="2" r="2" />
          <circle cx="32" cy="2" r="2" />
          <circle cx="42" cy="2" r="2" />
          <circle cx="52" cy="2" r="2" />
          <circle cx="62" cy="2" r="2" />
          <circle cx="72" cy="2" r="2" />
          <circle cx="82" cy="2" r="2" />
          <circle cx="92" cy="2" r="2" />
          <circle cx="2" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="22" cy="12" r="2" />
          <circle cx="32" cy="12" r="2" />
          <circle cx="42" cy="12" r="2" />
          <circle cx="52" cy="12" r="2" />
          <circle cx="62" cy="12" r="2" />
          <circle cx="72" cy="12" r="2" />
          <circle cx="82" cy="12" r="2" />
          <circle cx="92" cy="12" r="2" />
          <circle cx="2" cy="22" r="2" />
          <circle cx="12" cy="22" r="2" />
          <circle cx="22" cy="22" r="2" />
          <circle cx="32" cy="22" r="2" />
          <circle cx="42" cy="22" r="2" />
          <circle cx="52" cy="22" r="2" />
          <circle cx="62" cy="22" r="2" />
          <circle cx="72" cy="22" r="2" />
          <circle cx="82" cy="22" r="2" />
          <circle cx="92" cy="22" r="2" />
          <circle cx="2" cy="32" r="2" />
          <circle cx="12" cy="32" r="2" />
          <circle cx="22" cy="32" r="2" />
          <circle cx="32" cy="32" r="2" />
          <circle cx="42" cy="32" r="2" />
          <circle cx="52" cy="32" r="2" />
          <circle cx="62" cy="32" r="2" />
          <circle cx="72" cy="32" r="2" />
          <circle cx="82" cy="32" r="2" />
          <circle cx="92" cy="32" r="2" />
          <circle cx="2" cy="42" r="2" />
          <circle cx="12" cy="42" r="2" />
          <circle cx="22" cy="42" r="2" />
          <circle cx="32" cy="42" r="2" />
          <circle cx="42" cy="42" r="2" />
          <circle cx="52" cy="42" r="2" />
          <circle cx="62" cy="42" r="2" />
          <circle cx="72" cy="42" r="2" />
          <circle cx="82" cy="42" r="2" />
          <circle cx="92" cy="42" r="2" />
        </svg>
      </div>
    </section>
  );
};

export default SummarySection;
