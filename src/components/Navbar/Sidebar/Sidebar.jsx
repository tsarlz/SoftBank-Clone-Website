import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Sidebar = ({ isOpen, setOpen }) => {
  const [openMenus, setOpenMenus] = useState({});
  const sidebarMenu = [
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

  // Toggle menu function
  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="sidebar"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="z-[1000] px-16 bg-black fixed top-0 left-0 bottom-0 w-full h-[100vh] overflow-y-auto sidebar"
        >
          <div
            className="text-white mt-4 w-full flex justify-end items-center"
            onClick={() => setOpen(false)}
          >
            <Hamburger
              className="z-[1000000]"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>

          {/* Search */}
          <div className="flex justify-center items-center ">
            <span className="relative">
              <input
                className="bg-gray-200 py-1 px-3 text-md font-light rounded-full outline-none"
                placeholder="Search"
                type="text"
              />
              <IoSearch className="absolute top-1/2 right-2 -translate-y-1/2" />
            </span>
          </div>

          {/* Content */}
          <ul className="text-white mt-10">
            {sidebarMenu.map(({ id, menu, submenus }) => (
              <li key={id} className="w-full">
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

          {/* Footer */}
          <div className="text-white pt-10 my-16 w-full border-t border-white">
            <p className="text-xl font-semibold">Our Funds</p>
            <ul className="pl-6 mt-6 space-y-2">
              <li>Vision Funds Show</li>
              <li>Latin American Funds</li>
              <li>Opportunity Funds</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
