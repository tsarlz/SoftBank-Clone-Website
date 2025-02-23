import React from "react";

const FooterPolicies = () => {
  const policies = [
    "Privacy",
    "Site Policy",
    "Cookies Policy",
    "Web Accessibility",
    "Policy",
    "Legal Notice",
    "Contact Us",
    "Site Map",
  ];
  return (
    <ul className="flex md:flex-row flex-col md:justify-center justify-center items-start text-[#fdfdfd] mt-7 md:space-y-0 space-y-4 md:text-base text-sm">
      {policies.map((policy, i) => (
        <li
          className={`lg:pr-3 pr-2 cursor-pointer  ${
            i !== policies.length - 1 ? "md:border-r-2 lg:mr-3 mr-2" : ""
          }`}
          key={i}
        >
          {policy}
        </li>
      ))}
    </ul>
  );
};

export default FooterPolicies;
