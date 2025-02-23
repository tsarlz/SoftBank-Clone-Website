import { FiPrinter } from "react-icons/fi";
import FooterDesktopMenu from "./FooterDesktopMenu";
import FooterMobileMenu from "./FooterMobileMenu";
import FooterSocialIcons from "./FooterSocialIcons";
import FooterPolicies from "./FooterPolicies";

const Footer = () => {
  const footerLists = [
    {
      id: 1,
      list: "News",
      sublists: ["Press Release", "Notices", "Press Conference", "Webcast"],
    },
    {
      id: 2,
      list: "Vision & Strategy",
      sublists: [
        "Message from Chairman & CEO",
        "Philosophy",
        "Vision",
        "Strategy",
        "Values",
        "SoftBank Group History",
        "Origin of our Brand Name and Logo",
        "[AI] What dreams are made of",
      ],
    },
    {
      id: 3,
      list: "Segments",
      sublists: [
        "Investment Business of Holding Companies",
        "SoftBank Vision Funds",
        "SoftBank",
        "Arm",
        "Other",
        "Group Companies",
      ],
    },
    {
      id: 4,
      list: "Investor Relations",
      sublists: [
        "IR News",
        "IR Calendar",
        "Events and Presentations",
        "Financials and Filings",
        "Annual Reports",
        "For Shareholders",
        "Stocks and Bonds",
        "IR Disclaimers",
      ],
    },
    {
      id: 5,
      list: "Sustainability",
      sublists: [
        "Sustainability News",
        "Top Message",
        "Our Approach to Sustainability",
        "Environmental Initiatives",
        "Social Initiatives",
        "Governance",
        "Portfolio Companies' Sustainability",
        "ESG Data",
      ],
    },

    {
      id: 6,
      list: "",
      sublists: [
        "External Evaluation",
        "Stakeholder Engagement",
        "GRI Standards Content Index",
        "Sustainability Archive",
        "Our Response to COVID-19",
        "Editorial Policy and Disclaimers",
      ],
    },
    {
      id: 7,
      list: "Company Info",
      sublists: [
        "Corporate Data",
        "Board of Directors",
        "Corporate Governance",
        "Compliance",
        "Information Security",
        "Risk Management",
        "Initiatives for Taxation",
        "Careers",
      ],
    },
  ];

  return (
    <div className="bg-[#535557]">
      <div className="max-w-[60rem] mx-auto pt-10 lg:px-0 px-5">
        {/* Print Icon */}
        <div className="flex justify-start items-center text-[#fdfdfd] text-xl space-x-2 font-semibold">
          <FiPrinter />
          <span>Print</span>
        </div>
        {/* Desktop */}
        <FooterDesktopMenu footerLists={footerLists} />
        {/* Small Device */}
        <FooterMobileMenu />
        {/* Social Icons */}
        <FooterSocialIcons />
        {/* Policies */}
        <FooterPolicies />
        {/* Copy Right */}
        <div className="flex justify-center items-center text-[#fdfdfd] mt-7 pb-10 md:text-base text-sm">
          <p>Copyright © SoftBank Group Corp. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
