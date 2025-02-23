import React from "react";

const HerorTextBlockLargeScreen = ({ activeIndex, title, content }) => {
  return (
    activeIndex === i && (
      <motion.div
        className="absolute md:bottom-8 bg-white py-5 space-y-3 px-10 max-w-[60rem] hidden md:block text-black"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="border-b-2 border-black inline text-3xl">{title}</h1>
        <p className="underline decoration-[1.5px] underline-offset-4">
          {content}
        </p>
      </motion.div>
    )
  );
};

export default HerorTextBlockLargeScreen;
