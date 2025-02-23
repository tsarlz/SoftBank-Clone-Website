import React from "react";

const FooterDesktopMenu = ({ footerLists }) => {
  return (
    <ul className="md:grid hidden gap-2 grid-cols-4 grid-rows-2 text-[#fdfdfd] mt-8">
      {footerLists.map(({ id, list, sublists }) => (
        <li key={id} className="pt-5 mt-5 border-t-2 ">
          <p className="text-xl mb-2 ">{list}</p>
          <ul className="ml-4 space-y-4">
            {sublists.map((sub, i) => (
              <li key={i}>{sub}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default FooterDesktopMenu;
