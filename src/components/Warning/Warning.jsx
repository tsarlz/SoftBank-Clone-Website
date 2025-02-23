import React from "react";
import { GoArrowRight } from "react-icons/go";

const Warning = () => {
  const warnings = [
    {
      id: 1,
      date: "Oct. 17, 2024",
      content:
        "Warning regarding Investment Solicitations Impersonating Our Employees",
    },
    {
      id: 2,
      date: "Aug. 24, 2023",
      content:
        "Warning on Suspicious Messages Purporting from Existing Companies",
    },
    {
      id: 3,
      date: "Mar. 15, 2022",
      content:
        "Warning regarding Investment Solicitation for Investment and Other Services by Companies Illegally Using SoftBank Names",
    },
    {
      id: 4,
      date: "May. 28, 2021",
      content: "Warning: Announcement Made inder the Name of Kishu Inu",
    },
    {
      id: 5,
      date: "Jan. 13 ,2021",
      content: "Warning on Suspicious Emails Regarding Cryptocurrency Services",
    },
  ];

  return (
    <div className="max-w-[60rem] mx-auto md:pt-10 pt-5 ">
      {/* Title */}
      <div className=" mx-auto md:mb-10 mb-5 lg:pl-0 pl-5">
        <p className="sm:text-3xl text-xl font-semibold hover:underline decoration-[1.5px] underline-offset-4 group flex space-x-3 items-center text-[#333333]">
          <span>Warning</span>
          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </div>
      {/* Content */}
      <div className="bg-white lg:px-16 px-8 lg:pt-16 pt-6 pb-5 lg:mx-0 mx-5">
        <ul className="space-y-8">
          {warnings &&
            warnings.map(({ id, content }) => (
              <li key={id}>
                <p className="md:text-base text-xs mb-2">Feb. 12, 2025</p>
                <p className="text-blue-400 hover:underline decoration-[1.5px] underline-offset-4 md:text-lg text-base">
                  {content}
                </p>
              </li>
            ))}

          <span className=" w-full flex justify-end items-center space-x-2 mt-3 group md:text-lg text-base">
            <span className="group-hover:underline decoration-[1.5px] underline-offset-4">
              Warnings
            </span>
            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Warning;
