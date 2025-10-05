import React from "react";

function UseCases() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="usecases"
      className="py-12 px-4 sm:px-6 md:py-50 md:px-15 bg-black text-white"
    >
      
      <div className="pb-6 sm:pb-10 px-4 sm:px-6 md:px-18 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[2.4rem] font-bold mb-4">
          Transforming Industries
        </h2>
        <p className=" text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Discover how Everlyn autonomous video AI is revolutionizing content
          creation across multiple industries.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        
        <div
          onClick={scrollToTop}
          className="relative cursor-pointer group w-full overflow-hidden rounded-xl"
        >
          <img
            src="./usecase5.png"
            alt="Technology"
            className="w-full h-52 sm:h-64 object-cover opacity-40 border-b border-b-gray-400 rounded-xl transform transition duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 items-start py-3 sm:py-5 px-4 sm:px-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Content Creation
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-[1.05rem]">
              Generate professional-quality video content for social media,
              marketing campaigns, and entertainment.
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4">
            <a
              href="#top"
              onClick={(e) => {
                e.stopPropagation();
                scrollToTop();
              }}
              className="text-purple-400 text-sm sm:text-base hover:text-purple-300"
            >
              Explore use case →
            </a>
          </div>
        </div>

        
        <div
          onClick={scrollToTop}
          className="relative cursor-pointer group w-full overflow-hidden rounded-xl"
        >
          <img
            src="./usecase3.avif"
            alt="Technology"
            className="w-full h-52 sm:h-64  object-cover border-b opacity-40 border-b-gray-400 rounded-xl transform transition duration-500 ease-in-out group-hover:scale-105  "
          />

          <div className="absolute inset-0 items-start py-3 sm:py-5 px-4 sm:px-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Film Production
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-[1.05rem]">
              Streamline pre-visualization, special effects, and post-production
              workflows for filmmakers.
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4">
            <a
              href="#top"
              onClick={(e) => {
                e.stopPropagation();
                scrollToTop();
              }}
              className="text-purple-400 text-sm sm:text-base hover:text-purple-300 "
            >
              Explore use case →
            </a>
          </div>
        </div>

        
        <div
          onClick={scrollToTop}
          className="relative cursor-pointer group w-full overflow-hidden rounded-xl"
        >
          <img
            src="./usecase2.png"
            alt="Technology"
            className="w-full h-52 sm:h-64 object-cover opacity-40 border-b border-b-gray-400 rounded-xl transform transition duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 items-start py-3 sm:py-5 px-4 sm:px-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Education
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-[1.05rem]">
              Create engaging educational content with customizable scenarios
              and visualizations.
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4">
            <a
              href="#top"
              onClick={(e) => {
                e.stopPropagation();
                scrollToTop();
              }}
              className="text-purple-400 text-sm sm:text-base hover:text-purple-300"
            >
              Explore use case →
            </a>
          </div>
        </div>

        
        <div
          onClick={scrollToTop}
          className="relative cursor-pointer group w-full overflow-hidden rounded-xl"
        >
          <img
            src="./usecase4.avif"
            alt="Technology"
            className="w-full h-52 sm:h-64 object-cover opacity-40 border-b  border-b-gray-400 rounded-xl transform transition duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 items-start py-3 sm:py-5 px-4 sm:px-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Virtual Reality
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-[1.05rem]">
              Generate immersive VR environments and experiences with
              photorealistic quality.
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4">
            <a
              href="#top"
              onClick={(e) => {
                e.stopPropagation();
                scrollToTop();
              }}
              className="text-purple-400 text-sm sm:text-base hover:text-purple-300"
            >
              Explore use case →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCases;

