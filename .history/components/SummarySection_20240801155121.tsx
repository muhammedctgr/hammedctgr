import { FC } from 'react';

const DesignEngineeringSection: FC = () => {
  return (
    <section className="bg-white text-purple-800 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center">
                <i className="text-white">💡</i> {/* Replace with an appropriate icon */}
              </div>
              <h2 className="text-4xl font-bold ml-4">Design</h2>
            </div>
            <p className="text-lg">
              I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~^~). I'm committed to creating fluent user experiences while staying fashionable.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center">
                <i className="text-white">⚙️</i> {/* Replace with an appropriate icon */}
              </div>
              <h2 className="text-4xl font-bold ml-4">Engineering</h2>
            </div>
            <p className="text-lg">
              In building JavaScript applications, I'm equipped with just the right tools and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale—performance and scalability are priorities on my radar.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border border-purple-200"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-purple-200 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border border-purple-200"></div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-purple-200 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 border border-purple-200"></div>
    </section>
  );
};

export default DesignEngineeringSection;
