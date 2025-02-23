import React from "react";
import { GoArrowRight } from "react-icons/go";

const Info = () => {
  const infos = [
    { id: 1, info: "Corporate Data" },
    { id: 2, info: "Board of Directors" },
    { id: 3, info: "SoftBank Group History" },
    { id: 4, info: "Careers" },
  ];
  return (
    <div className="max-w-[60rem] mx-auto md:pt-10 pt-5 ">
      {/* Title */}
      <div className="max-w-[60rem] mx-auto md:mb-10 mb-5 lg:pl-0 pl-5">
        <p className="sm:text-3xl text-xl font-semibold hover:underline decoration-[1.5px] underline-offset-4 group flex space-x-3 items-center text-[#333333]">
          <span>Company Info</span>
          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </div>
      {/* Contents */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full lg:px-0 px-5">
        {infos &&
          infos.map(({ id, info }) => (
            <li
              key={id}
              className="bg-white flex flex-col justify-center items-center text-center h-full py-8 border group relative overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10 w-full px-4">
                <p className="font-semibold">{info}</p>
                <div className="w-full flex justify-center items-center mt-3">
                  <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover Animation */}
              <div className="absolute inset-0 bg-black/20 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Info;
