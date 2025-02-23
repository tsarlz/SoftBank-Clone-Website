import React from "react";
import { GoArrowRight } from "react-icons/go";

const Sustainability = () => {
  const sustains = [
    {
      id: 1,
      title: "Interpretation of Sustainability",
      imgUrl: "/sustainbg1.jpg",
      content:
        "We will seek to bring about a society that enriches the lives of people throughout the world.",
    },
    {
      id: 2,
      title: "Environmental Initiatives",
      imgUrl: "/sustainbg2.jpg",
      content: "",
    },
    {
      id: 3,
      title: "Social Initiatives",
      imgUrl: "/sustainbg3.jpg",
      content: "",
    },
  ];
  return (
    <div className="max-w-[60rem] mx-auto md:pt-10 pt-5 ">
      {/* Title */}
      <div className=" mx-auto md:mb-10 mb-5 lg:pl-0 pl-5">
        <p className="sm:text-3xl text-xl  font-semibold hover:underline decoration-[1.5px] underline-offset-4 group flex space-x-3 items-center text-[#333333]">
          <span>Sustainability</span>
          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 h-auto md:gap-1 gap-[2px] lg:px-0 px-5">
        {sustains &&
          sustains.map(({ id, imgUrl, title, content }, i) => (
            <li
              key={id}
              className={`relative overflow-hidden group
          ${
            i === 0
              ? "sm:col-span-2 md:col-span-2 md:row-span-2 h-[24rem]" // Larger item
              : "sm:col-span-1 md:col-span-1 md:row-span-1 h-[12rem]" // Smaller items
          }`}
            >
              {/* Image */}
              <img
                src={imgUrl}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                alt={title}
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/60 p-5 text-center space-y-3">
                <p className="text-xl font-bold">{title}</p>
                {content && (
                  <p className="text-sm max-w-[80%]">
                    We will seek to bring about a society that enriches the
                    lives of people throughout the world.
                  </p>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sustainability;
