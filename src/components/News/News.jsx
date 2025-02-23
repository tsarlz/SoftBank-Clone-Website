import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const wBgNews = [
  {
    id: 1,
    content: "[Archived video] Earnings Results Briefing for Q3 FY2024",
  },
  {
    id: 2,
    content:
      "Earnings Results Briefing for Q3 FY2024 (Consolidated Financial Report)",
  },
];

const nBgNews = [
  {
    id: 1,
    icon: "/icon1.svg",
    bText: "Notices",
    content:
      "SoftBank Group Selected for Fourth Consecutive Year as Sustainability Yearbook Member in S&P Global Sustainability Assessment",
  },
  {
    id: 2,
    icon: "icon3.svg",
    bText: "Notices",
    content:
      "[Short Video] SoftBank Group Earnings: Q3 FY2024 by Yoshimitsu Goto, Board Director, Corporate Officer, Senior Vice President, CFO & CISO",
  },
  {
    id: 3,
    icon: "icon3.svg",
    bText: "Press",
    content:
      "Status of Share Repurchase in Accordance with the Board Resolution as of August 7, 2024",
  },
  {
    id: 4,
    icon: "/icon2.svg",
    bText: "Press",
    content: "Personel Change",
  },
];

const News = () => {
  return (
    <div className="flex  justify-center items-center sm:mt-10 mt-5 md:mx-5 lg:mx-0">
      <div className="max-w-[60rem] md:mx-0 sm:mx-20 mx-0">
        <p className="flex justify-self-start-start items-center space-x-5 text-xl group mb-2 sm:ml-0 ml-5 ">
          <span className="sm:text-3xl text-xl">News</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </p>
        {/* news bg */}
        <div className="flex flex-col md:flex-row  justify-between gap-1 lg:gap-3 items-center ">
          {/* News 1 */}
          {wBgNews &&
            wBgNews.map(({ id, content }) => (
              <div key={id} className="relative w-full group overflow-hidden ">
                {/* Background Image with Hover Scale */}
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 "
                  src="/newbg.png"
                />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-3 sm:p-10 p-5  bg-black/50 hover:bg-black/60 ">
                  {/* Head News */}
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/newsIcon.svg"
                      className="border rounded-full lg:size-12 size-14"
                    />
                    <p>IR</p>
                  </div>

                  {/* Content */}
                  <div className="text-start flex items-start flex-col lg:space-y-3 space-y-1">
                    <p className="lg:text-sm text-xs">Feb. 12, 2025</p>
                    <p className="lg:text-xl text-lg font-semibold">
                      {content}
                    </p>
                  </div>

                  {/* Button + Icon */}
                  <div className="flex justify-between items-center  w-full">
                    <button className="bg-none text-[10px] border px-2">
                      Notices
                    </button>
                    <span>
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* News 2 */}
        <ul className="grid md:grid-cols-2 md:gap-4 gap-3 mt-10 md:px-0 px-5">
          {nBgNews &&
            nBgNews.map(({ id, icon, content, bText }) => (
              <li
                key={id}
                className="flex md:py-5 py-3  w-full border border-transparent hover:border-black hover:border-dotted transition group"
              >
                {/* Icon */}
                <div className="sm:px-8 px-4 border-r border-black flex items-start">
                  <img
                    src={icon}
                    className=" sm:w-24 w-16 border  border-black rounded-full object-cover"
                  />
                </div>
                <div className="sm:pl-8 pl-4 flex justify-start items-center w-full">
                  <div className="sm:space-y-5 space-y-3 flex flex-col">
                    <p className="group-hover:underline decoration-[1.5px] underline-offset-4 sm:text-md text-xs">
                      Feb. 14, 2025
                    </p>
                    <p className="group-hover:underline decoration-[1.5px] underline-offset-4 sm:text-md text-sm">
                      {content}
                    </p>
                    <span>
                      <button className="bg-none text-[10px] border px-2">
                        {bText}
                      </button>
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex items-center justify-end space-x-3 hover:underline decoration-[1.5px] underline-offset-4 group">
          <span>Latest News</span>
          <span>
            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default News;
