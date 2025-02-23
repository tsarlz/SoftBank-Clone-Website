"use client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropdownTitle = ({ text, isOpen, toggleOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DropdownMenuTrigger
        className="flex items-center space-x-2 p-1 font-[600] border-b border-transparent cursor-pointer"
        onClick={toggleOpen}
      >
        <span>{text}</span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </DropdownMenuTrigger>

      {/* Animated Border */}
      <div
        className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 ease-in-out ${
          isHovered || isOpen ? "w-full" : "w-0"
        }`}
      ></div>
    </div>
  );
};

export default DropdownTitle;
