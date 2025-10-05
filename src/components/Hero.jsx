import React from "react";
import { PiPlayCircleLight } from "react-icons/pi";
import { TfiArrowRight } from "react-icons/tfi";

function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-black to-gray-950 ">
      {/* Tagline */}
      <p className="mt-24  text-purple-300 text-[14px] sm:text-[15px] md:text-sm mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl border border-purple-900 bg-purple-600/20 rounded-2xl py-[0.15rem] px-[0.7rem]">
        <span className="text-lg text-purple-400">• </span>
        Introducing the future of autonomous video
      </p>

      {/* Main heading */}
      <h1 className="text-3xl sm:text-4xl md:text-[4.2rem] font-extrabold mb-4 sm:mb-6 leading-snug sm:leading-tight">
        The First Decentralized AI for Autonomous Video
      </h1>

      {/* Subheading */}
      <h2 className="text-xs sm:text-sm md:text-xl text-gray-400 font-normal max-w-sm sm:max-w-xl md:max-w-3xl">
        Everlyn empowers creators with AI-driven video generation on a secure,
        decentralized infrastructure. Create stunning, autonomous video content
        with unprecedented control and ownership.
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-9">
        <button className="hover:brightness-90 text-white bg-gradient-to-l from-blue-600 to-purple-600 rounded-3xl py-[0.7rem] px-[2rem] transition-all duration-300">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span>Get Early Access</span>
            <TfiArrowRight className="text-lg" />
          </div>
        </button>

        <button className=" hover:text-blue-400 text-white border border-gray-700 rounded-3xl py-[0.7rem] px-[1.5rem] transition-all duration-300">
          <div className="flex items-center justify-center gap-2">
            <PiPlayCircleLight className="text-lg" />
            <span>Watch Demo</span>
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;
