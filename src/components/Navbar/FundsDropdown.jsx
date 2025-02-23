"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdContentCopy, MdKeyboardArrowDown } from "react-icons/md";

const FundsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center p-1 font-[350] border-b border-black">
        Our Funds <MdKeyboardArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p>
            Vision Funds
            <MdContentCopy size={15} className="inline ml-2" />
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p>
            Latin American Funds
            <MdContentCopy size={15} className="inline ml-2" />
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p>
            Opportunity Funds
            <MdContentCopy size={15} className="inline ml-2" />
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FundsDropdown;
