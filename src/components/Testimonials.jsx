import { IoIosStar } from "react-icons/io";
import { IconContext } from "react-icons";
import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-black text-white">
      <div className=" pb-20 px-18 text-center">
        <h2 className="text-4xl md:text-[2.4rem] font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-sm md:text-xl text-gray-400 m-auto text-center font-normal max-w-3xl leading-relaxed">
          Join the community of creators revolutionizing video production with
          Everlyn.
        </p>
      </div>

      <IconContext.Provider value={{ color: "purple", size: "15px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-7 bg-gray-950 hover:bg-gray-900 rounded-xl shadow-lg">
            <div className=" flex flex-row pb-7">
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </div>
            <p className="pb-7">
              "Everlyn has completely transformed our content production
              pipeline. We're creating videos in hours that used to take weeks."
            </p>

            <div className="flex items-center gap-3 pb-7 " >
              <img
                src="./user1.png"
                alt="Sarah Chen"
                className="w-12 h-12 rounded-full border border-gray-700"
              />
              <div>
                <h4 className="font-normal text-lg">Sarah Chen</h4>
                <p className="text-sm text-gray-400">
                  Creative Director, Visionary Media
                </p>
              </div>
            </div>
          </div>

          <div className="p-7 bg-gray-950 hover:bg-gray-900 rounded-xl shadow-lg">
            <div className=" flex flex-row pb-7">
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </div>
            <p className="pb-7">
            "The decentralized architecture gives us peace of mind about content ownership and censorship resistance that no other platform offers."
            </p>

            <div className="flex items-center gap-3 pb-7">
              <img
                src="./user2.png"
                alt="Marcus Johnson"
                className="w-12 h-12 rounded-full border border-gray-700"
              />
              <div>
                <h4 className="font-normal text-lg">Marcus Johnson</h4>
                <p className="text-sm text-gray-400">
                  Independent Filmmaker
                </p>
              </div>
            </div>
          </div>

          <div className="p-7 bg-gray-950 hover:bg-gray-900 rounded-xl shadow-lg">
            <div className=" flex flex-row pb-7">
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </div>
            <p className="pb-7">
            "As an educator, Everlyn helps me create engaging visual content for complex topics that keeps my students captivated."
            </p>

            <div className="flex items-center gap-3 pb-7">
              <img
                src="./user3.png"
                alt="Dr. Amelia Patel"
                className="w-12 h-12 rounded-full border border-gray-700"
              />
              <div>
                <h4 className="font-normal text-lg">Dr. Amelia Patel</h4>
                <p className="text-sm text-gray-400">
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
