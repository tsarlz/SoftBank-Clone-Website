import React from "react";
import { MdContentCopy } from "react-icons/md";

const Funds = () => {
  const funds = [
    {
      id: 1,
      imgUrl: "/fund2.jpg",
      text: "SoftBank latin America Fund",
    },
    {
      id: 2,
      imgUrl: "/fund3.jpg",
      text: "Open Oppurtunity Fund",
    },
  ];
  return (
    <div className="max-w-[60rem] md:pt-10 pt-5 mx-auto">
      {/* Title */}
      <div className="flex justify-center items-center w-full md:mb-10 mb-5 ">
        <h2 className="sm:text-3xl text-xl text-[#333]">Our Funds</h2>
      </div>
      <div className="bg-white flex md:flex-row flex-col justify-center items-center group overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="overflow-hidden md:w-3/4 w-full">
          <img
            src="/fund1.jpg"
            className=" transition-transform duration-500 ease-in-out group-hover:scale-110 w-full "
          />
        </div>
        {/* Text */}
        <div className="flex items-center justify-center md:w-1/4 w-full mx-8 group-hover:underline decoration-[1.5px] underline-offset-4 md:py-0 py-3 ">
          <h3 className="lg:text-3xl md:text-2xl text-xl mx-3   ">
            SoftBank Vison Fund
            <MdContentCopy size={15} className="inline ml-2" />
          </h3>
        </div>
      </div>

      {/* Funds */}

      <div className="flex md:flex-row flex-col md:gap-10 gap-5 mt-10 w-full md:px-0 px-5">
        {funds.map(({ id, imgUrl, text }) => (
          <div
            key={id}
            className="flex justify-start items-center bg-white md:w-1/2 w-full group cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={imgUrl}
                className="md:w-[10.5rem] w-[6.5rem] transition-transform duration-500 ease-in-out group-hover:scale-110  "
                alt=""
              />
            </div>
            <div className="lg:pl-8  pl-4 group-hover:underline decoration-[1.5px] underline-offset-4 lg:text-base text-sm">
              <p>
                {text}
                <MdContentCopy size={15} className="inline ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Funds;
