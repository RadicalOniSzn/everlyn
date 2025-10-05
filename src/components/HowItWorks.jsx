import React from "react";

function HowItWorks() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="how"
      className="mx-4 sm:mx-10 py-16 sm:py-20 px-4 sm:px-6 bg-black text-white"
    >
      {/* Outer layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-6">
        {/* Left content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mx-auto text-center lg:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
            How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-normal max-w-lg">
            Our revolutionary decentralized infrastructure powers AI video
            generation with unprecedented quality and control.
          </p>

          <div
            onClick={scrollToTop}
            className="relative cursor-pointer group w-full max-w-sm sm:max-w-md mt-6"
          >
            <img
              src="./science.png"
              alt="Technology"
              className="w-full h-52 sm:h-64 object-cover rounded-lg"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 rounded-lg">
              <a
                href="#top"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToTop();
                }}
                className="text-white text-sm sm:text-base font-medium hover:underline"
              >
                Learn about our technology →
              </a>
            </div>
          </div>
        </div>

        {/* Center image (numbering) */}
        <div className="hidden md:flex flex-none justify-center items-center px-4">
          <img
            src="./numbering.webp"
            alt="Steps numbering"
            className="h-96 lg:h-[28rem] object-contain"
          />
        </div>

        {/* Right content */}
        <div className="w-full lg:w-2/5 max-w-3xl mx-auto space-y-6 text-center lg:text-left">
          <div className="rounded-xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              AI Generation
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Everlyn’s decentralized AI processes your request across our
              secure network, applying advanced models to create your video.
            </p>
          </div>

          <div className="rounded-xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Input Your Vision
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Describe your video concept or upload reference materials. Our AI
              understands natural language and visual cues.
            </p>
          </div>

          <div className="rounded-xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Review & Refine
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Preview your generated video and make adjustments using simple
              commands or our intuitive editor.
            </p>
          </div>

          <div className="rounded-xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Deploy & Share
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Export your finalized video in various formats or publish directly
              to platforms while maintaining ownership.
            </p>
          </div>

          <button className="w-full sm:w-auto hover:bg-gray-900 text-white border border-gray-700 rounded-3xl py-[0.7rem] px-[1.5rem] transition-colors">
            <div className="flex justify-center lg:justify-start gap-2 text-sm sm:text-base">
              <span>View Technical Documentation</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
