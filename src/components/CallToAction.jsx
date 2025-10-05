import React from "react";
import { TfiArrowRight } from "react-icons/tfi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  const data = [
    { value: 15, suffix: "s", label: "Generation Speed" },
    { value: 100, suffix: "%", label: "Content Ownership" },
    { value: 8, suffix: "X", label: "Efficiency Gain" },
    { value: 4, suffix: "K+", label: "Resolution" },
  ];

  return (
    <>
      
      <section className="pt-20 sm:pt-24 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 bg-gradient-to-r from-[#0b021a] to-[#090016]">
        <h1 className="text-3xl sm:text-4xl md:text-[3rem] font-extrabold mb-5 sm:mb-6 leading-snug">
          Ready to Transform Your Video Creation?
        </h1>

        <h2 className="text-xs sm:text-sm md:text-xl text-gray-400 font-normal max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed">
          Join the future of autonomous video creation powered by decentralized
          AI. Early access is now available for creators and developers.
        </h2>

        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-9 w-full sm:w-auto justify-center">
          <button className="hover:brightness-110 text-white bg-gradient-to-l from-blue-600 to-purple-600 rounded-3xl py-[0.9rem] px-[2rem] sm:py-[1rem] sm:px-[3rem] transition-all text-sm sm:text-base">
            <div className="flex gap-2 sm:gap-3 items-center justify-center">
              <span>Request Early Access</span>
              <TfiArrowRight />
            </div>
          </button>

          <button className="hover:bg-gray-900 text-white border border-gray-700 rounded-3xl py-[0.9rem] px-[2rem] sm:py-[1rem] sm:px-[2.5rem] transition-all text-sm sm:text-base">
            <div className="flex gap-2 items-center justify-center">
              <span>View Documentation</span>
            </div>
          </button>
        </div>
      </section>

      {/* Metrics Section */}
      <section
        ref={ref}
        className="w-full py-14 sm:py-16 bg-gradient-to-r from-[#0b021a] to-[#090016] text-white flex justify-center"
      >
        <div className="w-[90%] md:w-[80%] max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-y-10 text-center">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix}
                  />
                ) : (
                  `0${item.suffix}`
                )}
              </h2>
              <p className="mt-2 text-gray-400 text-xs sm:text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CallToAction;
