import React from "react";
import { GoArrowRight } from "react-icons/go";

const Segments = () => {
  return (
    <div className=" bg-[#f1f1f3]  md:pt-10 pt-5 ">
      {/* Title */}
      <div className="max-w-[60rem] mx-auto md:mb-10 mb-5 lg:pl-0 pl-5">
        <p className="sm:text-3xl text-xl font-semibold hover:underline decoration-[1.5px] underline-offset-4 group flex space-x-3 items-center text-[#333333]">
          <span>Segments</span>
          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </div>
      {/* Content */}
      <div className="relative group overflow-hidden w-full">
        <img
          src="/bg5.jpg"
          className="w-full h-[59vh] sm:h-[64vh] md:h-[40vh] lg:h-[65vh] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        <div className="flex justify-center items-center flex-col bg-black/50 absolute inset-0 md:py-5 px-6 py-10">
          <p className="bg-white p-5 md:p-8 max-w-[60rem] text-base md:text-lg text-[#333] text-center md:text-start leading-relaxed">
            The evolution and widespread adoption of AI are expected to expand
            markets and create new industries. To capture these burgeoning
            opportunities, we are actively pursuing a broad investment strategy,
            including strategic investments by SBG and other investments through
            SVF. Furthermore, we are implementing the Cluster of No. 1 Strategy,
            a unique strategy for orchestrating our organization.
            <span className="w-full flex justify-end mt-3">
              <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Segments;
