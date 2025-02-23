import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const FooterSocialIcons = () => {
  return (
    <div className="text-[#fdfdfd] flex md:flex-row flex-col md:justify-center justify-start items-start md:space-x-4 text-lg font-semibold mt-10">
      <p>Follow Us</p>
      <div className="flex  space-x-3 md:mt-0 mt-3">
        <span className="cursor-pointer">
          <FaYoutube size={25} />
        </span>
        <span className="cursor-pointer">
          <FaXTwitter size={25} />
        </span>
        <span className="cursor-pointer">
          <FaLinkedin size={25} />
        </span>
      </div>
    </div>
  );
};

export default FooterSocialIcons;
