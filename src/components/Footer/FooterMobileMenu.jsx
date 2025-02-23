import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FooterMobileMenu = () => {
  const [openMenus, setOpenMenus] = useState({});

  // Toggle menu function
  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const footerMenu = [
    {
      id: 1,
      menu: "News",
      submenus: ["Press Releases", "Notices", "Press Conference", "Webcast"],
    },
    {
      id: 2,
      menu: "Vision & Strategy",
      submenus: [
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
      menu: "Segments",
      submenus: [
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
      menu: "Investor Relations",
      submenus: [
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
      menu: "Sustainability",
      submenus: [
        "Sustainability News",
        "Top Message",
        "Our Approach to Sustainability",
        "Environmental Initiatives",
        "Social Initiatives",
        "Governance",
        "Portfolio Companies' Sustainability",
        "ESG Data",
        "External Evaluation",
        "Stakeholder Engagement",
        "GRI Standards Content Index",
        "Sustainability Archive",
        "Our Response to COVID-19",
        "Editorial Policy and Disclaimers",
      ],
    },
    {
      id: 6,
      menu: "Company Info",
      submenus: [
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
    <ul className="text-white mt-10 block md:hidden">
      {footerMenu.map(({ id, menu, submenus }) => (
        <li key={id} className="w-full cursor-pointer">
          {/* Menu item */}
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => toggleMenu(id)}
          >
            <span className="text-lg">{menu}</span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: openMenus[id] ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openMenus[id] ? <FaMinus /> : <FaPlus />}
            </motion.div>
          </div>

          {/* Animated Submenu */}
          <AnimatePresence>
            {openMenus[id] && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="pl-6 mt-2 overflow-hidden"
              >
                {submenus.map((submenu, index) => (
                  <li key={index} className="py-1">
                    {submenu}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};

export default FooterMobileMenu;
