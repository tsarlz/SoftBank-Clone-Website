import React from "react";
import { GoArrowRight } from "react-icons/go";

const Vision = () => {
  const strategies = [
    {
      id: 1,
      title: "Vision",
      imgUrl: "/bg2a.jpg",
      content:
        "To become a corporate group that powers the world most essential technologies.",
    },
    {
      id: 2,
      title: "Message",
      imgUrl: "/bg3.jpg",
      content: "Masayoshi Son, Chairman & CEO",
    },
    {
      id: 3,
      title: "Strategy",
      imgUrl: "/bg4.jpg",
      content: "SoftBank Group's sustainable growth.",
    },
  ];
  return (
    <div className="sm:pt-10 pt-6 mt-5  ">
      {/* Title */}
      <div className="max-w-[60rem] mx-auto sm:mb-10 mb-5">
        <p className="sm:text-3xl text-xl font-semibold hover:underline decoration-[1.5px] underline-offset-4 group flex space-x-3 items-center text-[#333] lg:ml-0 ml-5">
          <span>Vision & Strategy</span>
          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </div>
      {/* Contents */}
      <div className="relative group overflow-hidden">
        <img
          className="lg:h-[65vh] md:h-[40vh] h-[45vh] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          src="/bg2.jpg"
        />
        <div className="flex justify-center items-center flex-col bg-black/50 absolute inset-0 text-white hover:underline decoration-[1.5px] underline-offset-4">
          <p className="sm:text-xl ">Corporate Philosophy</p>
          <h2 className="md:text-5xl sm:text-3xl text-2xl md:mt-12 sm:mt-8 mt-5 md:mb-2">
            Information Revolution
          </h2>
          <p className="md:text-4xl sm:text-2xl text-xl md:mb-12 sm:mb-8 mb-5 md:mt-2 mt-0">
            <span className="font-light ">&ndash;&ndash;</span>
            Happiness for everyone
          </p>
          <span className="flex items-center md:text-lg sm:text-md text-sm ">
            <span>READ MORE</span>
            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      {/* Strategies */}
      {strategies &&
        strategies.map(({ id, content, title, imgUrl }, i) => (
          <div
            key={id}
            className={`flex md:flex-row flex-col justify-between items-center mt-10 bg-white group ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="overflow-hidden lg:w-1/2 w-full ">
              <img
                src={imgUrl}
                className="w-full lg:h-full md:h-[25vh] h-[35vh] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div
              className={`flex flex-col justify-center md:py-0 py-5  lg:w-1/2 w-full group-hover:underline decoration-[1.5px] underline-offset-4  ${
                i % 2 === 0
                  ? "lg:pl-16 md:pl-10 items-start"
                  : "md:pr-16 md:items-end items-start"
              }`}
            >
              <div
                className={`lg:space-y-7 space-y-3 lg:mx-0 px-5 text-[#333] ${
                  i % 2 === 0
                    ? "lg:w-1/2 w-full"
                    : "lg:w-1/3 md:w-[60%] w-full lg:mr-16 "
                }`}
              >
                <p className="md:text-xl text-lg">{title}</p>
                <p className="md:text-2xl text-xl">{content}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Vision;
