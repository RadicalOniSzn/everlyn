import React from "react";
import { TfiArrowRight } from "react-icons/tfi";

function CallToAction() {
  const data = [
    { value: "15s", label: "Generation Speed" },
    { value: "100%", label: "Content Ownership" },
    { value: "8X", label: "Efficiency Gain" },
    { value: "4K+", label: "Resolution" },
  ];
  
  return (
    <>
    <section className="pt-24 flex flex-col justify-center items-center text-center px-16 bg-gradient-to-r from-[#0b021a] to-[#090016]">
      <h1 className=" text-5xl md:text-[3rem] font-extrabold mb-6 ">
        Ready to Transform Your Video Creation?
      </h1>
      <h2 className="text-sm md:text-xl px-10 text-gray-400 justify-center font-normal max-w-3xl">
        Join the future of autonomous video creation powered by decentralized AI. Early access is now available for creators and developers.
      </h2>
      <div className="flex gap-5 mt-9">
        <button className="hover:text-blue-400 text-white gradient: bg-gradient-to-l from-blue-600 to-purple-600 rounded-3xl py-[1rem] px-[3rem] transition-colors">
          <div className="flex gap-3">
            <span>Request Early access</span>
            <span>
              <TfiArrowRight />
            </span>
          </div>
        </button>
        <button className=" hover:text-blue-400 text-white for border border-gray-700 rounded-3xl py-[1rem] px-[2.5rem] transition-colors">
          <div className="flex gap-2 ">
            <span>View Documentation</span>
          </div>
        </button>
      </div>


    </section>

    <section className="w-full py-16 bg-gradient-to-r from-[#0b021a] to-[#090016] text-white flex justify-center">
      <div className="w-[90%] md:w-[80%] max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-y-10 text-center">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              {item.value}
            </h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">
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
