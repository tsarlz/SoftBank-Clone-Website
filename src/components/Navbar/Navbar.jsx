"use client";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import FundsDropdown from "@/components/Navbar/FundsDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import DropdownTitle from "@/components/Navbar/DropdownTitle";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Hamburger from "hamburger-react";

import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [iconOpen, setIconOpen] = useState(false);

  const navmenu = [
    {
      id: 1,
      title: "News",
      openChange: "news",
      subMenus: ["Press Releases", "Press Conference", "Notice", "Webcast"],
    },
    {
      id: 2,
      title: "Vision & Strategy",
      openChange: "vision",
      subMenus: [
        "Message from Chairman & CEO",
        "Philosophy",
        "Vision",
        "Strategy",
        "Values",
        "SoftBank Group History",
        "Origin of our Brand Name and Logo",
        "What dreams are made of",
      ],
    },
    {
      id: 3,
      title: "Segments",
      openChange: "segments",
      subMenus: [
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
      title: "Investor Relations",
      openChange: "relations",
      subMenus: [
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
      title: "Sustainability",
      openChange: "sustain",
      subMenus: [
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
      title: "Company Info",
      openChange: "info",
      subMenus: [
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
    <>
      <div className="bg-white  z-50 fixed top-0 right-0 left-0  py-3">
        <div className="max-w-[92em] m-auto  ">
          <div className="flex justify-between ">
            {/* Logo */}
            <Image
              className="mt-2 w-auto h-auto"
              src="/softbanklogo.svg"
              width={155}
              height={155}
              alt="SoftBank Logo"
              priority
            />

            <div className="mr-4 space-x-5  items-center hidden md:flex">
              <FundsDropdown />
              {/* search */}
              <span className=" relative">
                <input
                  className="bg-gray-200 py-1 px-3 text-sm font-light rounded-full outline-none"
                  placeholder="Search"
                  type="text"
                />
                <IoSearch className=" absolute top-1/2 right-2 -translate-y-1/2" />
              </span>
              <span className="text-sm ">
                <span>Japanese</span>&nbsp; | &nbsp;
                <span className="font-semibold">English</span>
              </span>
            </div>
            {/* Small Screen Breakpoints */}
            <div className="md:hidden flex justify-center items-center gap-2">
              <span>
                <span>JP</span>&nbsp; | &nbsp;
                <span className="font-semibold">EN</span>
              </span>

              <Hamburger
                className="z-[1000000]"
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
            {/* Side Navigation */}
          </div>
          {/* Navigation Menus -- Desktop*/}
          <nav className="md:flex justify-end items-center hidden">
            <NavigationMenu>
              <NavigationMenuList className="lg:space-x-4 space-x-2">
                {/* Item 1 */}
                {navmenu &&
                  navmenu.map(({ id, title, openChange, subMenus }) => (
                    <DropdownMenu
                      key={id}
                      open={openDropdown === openChange}
                      onOpenChange={(open) =>
                        setOpenDropdown(open ? openChange : null)
                      }
                    >
                      <DropdownTitle
                        text={title}
                        isOpen={openDropdown === openChange}
                        toggleOpen={() =>
                          setOpenDropdown((prev) =>
                            prev === openChange ? null : openChange
                          )
                        }
                      />
                      <DropdownMenuContent className="w-[100vw] bg-black text-white opacity-[95%]">
                        <div className="max-w-4xl mx-auto flex justify-between items-start m-10 ">
                          <DropdownMenuLabel className="flex justify-self-start-start items-center space-x-5 text-xl group">
                            <span> {title} </span>
                            <span>
                              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </DropdownMenuLabel>
                          <ul className="grid gap-8 grid-cols-2 text-md">
                            {subMenus &&
                              subMenus.map((menu) => (
                                <li
                                  key={menu}
                                  className="flex items-center w-[200px] justify-between  group"
                                >
                                  <span> {menu} </span>
                                  <span>
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Small Screen Nav Menu - SideBar */}
        </div>
      </div>
      <Sidebar
        iconOpen={iconOpen}
        setIconOpen={setIconOpen}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </>
  );
};

export default Navbar;
