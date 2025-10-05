import React from "react";
import { HiCpuChip } from "react-icons/hi2";
import { IconContext } from "react-icons";
import { FiLock } from "react-icons/fi";

function Features() {
  return (
    <>
      
      <div className="flex justify-center my-16 px-4">
        <img
          src="./video.png"
          alt="Video preview"
          className="mb-16 sm:mb-[10rem] w-full max-w-xs sm:max-w-md md:max-w-3xl object-contain rounded-2xl"
        />
      </div>

      
      <section
        id="features"
        className="flex flex-col justify-center py-12 sm:py-16 px-4 sm:px-6 bg-black text-white items-center text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Powerful Features for the Future of Video
        </h2>
        <h2 className="text-xs sm:text-sm md:text-lg text-gray-400 font-normal mx-auto max-w-sm sm:max-w-xl md:max-w-2xl">
          Everlyn combines advanced AI with decentralized infrastructure to
          deliver a revolutionary video creation experience.
        </h2>
      </section>

      {/* Feature cards grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mb-16 sm:mb-24 mx-auto px-4">
        <IconContext.Provider value={{ color: "purple", size: "25px" }}>
          
          <div className="p-5 sm:p-6 bg-gray-950 rounded-xl shadow-lg border border-gray-800 hover:border-purple-600 transition-all duration-300">
            <HiCpuChip />
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Advanced AI Models
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Cutting-edge video generation models trained on diverse,
              high-quality datasets for superior output.
            </p>
          </div>

          
          <div className="p-5 sm:p-6 bg-gray-950 rounded-xl shadow-lg border border-gray-800 hover:border-purple-600 transition-all duration-300">
            <HiCpuChip />
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Decentralized Infrastructure
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Distributed processing across a secure network ensures reliability
              and censorship resistance.
            </p>
          </div>

          
          <div className="p-5 sm:p-6 bg-gray-950 rounded-xl shadow-lg border border-gray-800 hover:border-purple-600 transition-all duration-300">
            <FiLock />
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Content Ownership
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Maintain complete ownership of your generated content with
              cryptographic verification.
            </p>
          </div>

         
          <div className="p-5 sm:p-6 bg-gray-950 rounded-xl shadow-lg border border-gray-800 hover:border-purple-600 transition-all duration-300">
            <HiCpuChip />
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Real-time Processing
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Generate and modify video content in real-time with low latency
              feedback.
            </p>
          </div>

          
          <div className="p-5 sm:p-6 bg-gray-950 rounded-xl shadow-lg border border-gray-800 hover:border-purple-600 transition-all duration-300">
            <HiCpuChip />
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Developer API
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Comprehensive API for seamless integration into existing workflows
              and applications.
            </p>
          </div>

          
          <div className="p-5 sm:p-6 bg-gray-950 rounded-xl shadow-lg border border-gray-800 hover:border-purple-600 transition-all duration-300">
            <HiCpuChip />
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Privacy Focused
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              End-to-end encryption and privacy-preserving computation protect
              your data.
            </p>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Features;
