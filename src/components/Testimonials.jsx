import { IoIosStar } from "react-icons/io";
import { IconContext } from "react-icons";
import React from "react";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 px-4 sm:px-8 md:px-12 bg-black text-white"
    >
      
      <div className="pb-10 md:pb-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[2.4rem] font-bold mb-4">
          What Our Users Say
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-gray-400 mx-auto max-w-3xl leading-relaxed">
          Join the community of creators revolutionizing video production with
          Everlyn.
        </p>
      </div>

      
      <IconContext.Provider value={{ color: "purple", size: "18px" }}>
        <div
          className="
            flex flex-row gap-6 sm:gap-8 overflow-x-auto lg:grid lg:grid-cols-3
            lg:overflow-visible max-w-6xl mx-auto pb-4 scrollbar-hide
          "
        >
          
          <div
            className="
              flex-shrink-0 w-80 sm:w-96 lg:w-auto
              p-6 sm:p-8 bg-gray-950 hover:bg-gray-900
              rounded-2xl shadow-lg transition-colors
            "
          >
            <div className="flex flex-row pb-5 sm:pb-7">
              {[...Array(5)].map((_, i) => (
                <IoIosStar key={i} />
              ))}
            </div>
            <p className="pb-6 sm:pb-7 text-gray-300 text-sm sm:text-base leading-relaxed">
              "Everlyn has completely transformed our content production
              pipeline. We're creating videos in hours that used to take weeks."
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./user1.png"
                alt="Sarah Chen"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700"
              />
              <div>
                <h4 className="font-normal text-base sm:text-lg">Sarah Chen</h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Creative Director, Visionary Media
                </p>
              </div>
            </div>
          </div>

          
          <div
            className="
              flex-shrink-0 w-80 sm:w-96 lg:w-auto
              p-6 sm:p-8 bg-gray-950 hover:bg-gray-900
              rounded-2xl shadow-lg transition-colors
            "
          >
            <div className="flex flex-row pb-5 sm:pb-7">
              {[...Array(5)].map((_, i) => (
                <IoIosStar key={i} />
              ))}
            </div>
            <p className="pb-6 sm:pb-7 text-gray-300 text-sm sm:text-base leading-relaxed">
              "The decentralized architecture gives us peace of mind about
              content ownership and censorship resistance that no other platform
              offers."
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./user2.png"
                alt="Marcus Johnson"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700"
              />
              <div>
                <h4 className="font-normal text-base sm:text-lg">
                  Marcus Johnson
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Independent Filmmaker
                </p>
              </div>
            </div>
          </div>

          
          <div
            className="
              flex-shrink-0 w-80 sm:w-96 lg:w-auto
              p-6 sm:p-8 bg-gray-950 hover:bg-gray-900
              rounded-2xl shadow-lg transition-colors
            "
          >
            <div className="flex flex-row pb-5 sm:pb-7">
              {[...Array(5)].map((_, i) => (
                <IoIosStar key={i} />
              ))}
            </div>
            <p className="pb-6 sm:pb-7 text-gray-300 text-sm sm:text-base leading-relaxed">
              "As an educator, Everlyn helps me create engaging visual content
              for complex topics that keeps my students captivated."
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./user3.png"
                alt="Dr. Amelia Patel"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700"
              />
              <div>
                <h4 className="font-normal text-base sm:text-lg">
                  Dr. Amelia Patel
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Professor of Digital Media
                </p>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </section>
  );
}

export default Testimonials;
