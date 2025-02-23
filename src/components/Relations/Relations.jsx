import React from "react";
import { GoArrowRight } from "react-icons/go";

const Relations = () => {
  const realtions = [
    {
      id: 1,
      content:
        " [Presentation materials] Earnings Investor Briefing for Q3 FY2024",
    },
    {
      id: 2,
      content: "[Net Asset Value per Share]Earnings Results for Q3 FY2024",
    },
    {
      id: 3,
      content: "[Data Sheets]Earnings Results for Q3 FY2024",
    },
  ];

  const relationIcon = [
    { id: 1, svgUrl: "/relationIcon1.svg", text: "Events and Presentation" },
    { id: 2, svgUrl: "/relationIcon2.svg", text: "Financials and Filings" },
    { id: 3, svgUrl: "/relationIcon3.svg", text: "For Investors" },
    { id: 4, svgUrl: "/relationIcon4.svg", text: "Stocks and Bonds" },
  ];

  const relationBanner = [
    { id: 1, imgUrl: "/relationbg1.jpg" },
    { id: 2, imgUrl: "/relationbg2.jpg" },
  ];
  return (
    <div className="max-w-[60rem] mx-auto md:pt-10 pt-5 ">
      {/* Title */}
      <div className=" mx-auto md:mb-10 mb-5 lg:pl-0 pl-5">
        <p className="sm:text-3xl text-xl font-semibold hover:underline decoration-[1.5px] underline-offset-4 group flex space-x-3 items-center text-[#333333]">
          <span>Investor Relations</span>
          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </div>
      {/* Content */}
      <div className="bg-white lg:px-16 px-8 lg:pt-16 pt-6 pb-4 lg:mx-0 mx-5">
        <ul className="space-y-8">
          {realtions &&
            realtions.map(({ id, content }) => (
              <li key={id}>
                <p className="md:text-base text-xs mb-2">Feb. 12, 2025</p>
                <p className="text-blue-400 hover:underline decoration-[1.5px] underline-offset-4 md:text-lg text-base">
                  {content}
                </p>
              </li>
            ))}

          <span className=" w-full flex justify-end items-center space-x-2 mt-3 group md:text-base text-xs">
            <span className="group-hover:underline decoration-[1.5px] underline-offset-4">
              IR News
            </span>
            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </ul>
      </div>
      {/* Icons */}
      <ul className="grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-5 justify-between items-center lg:mt-10 mt-5 lg:px-0 px-5">
        {relationIcon &&
          relationIcon.map(({ id, svgUrl, text }) => (
            <li
              key={id}
              className="flex flex-col justify-center items-center space-y-3"
            >
              <img
                src={svgUrl}
                className="md:p-1 p-0 border-2 rounded-full border-[#333]"
                alt={`${text} SVG `}
              />
              <p className="md:text-lg text-base text-center">{text}</p>
            </li>
          ))}
      </ul>
      <ul className="flex md:flex-row flex-col md:gap-10 gap-5 mt-10 w-full lg:px-0 px-5">
        {relationBanner &&
          relationBanner.map(({ id, imgUrl }) => (
            <li key={id} className=" bg-white md:w-1/2 w-full">
              <img src={imgUrl} alt={imgUrl} />
              <div className=" w-full flex justify-end items-center space-x-2 my-3 pr-3 ">
                <span className="group-hover:underline decoration-[1.5px] underline-offset-4">
                  IR News
                </span>
                <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Relations;
