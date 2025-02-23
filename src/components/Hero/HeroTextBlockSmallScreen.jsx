import { motion } from "framer-motion";

const HeroTextBlockSmallScreen = ({ slides, activeIndex }) => {
  return (
    <motion.div
      className="w-full flex justify-center  md:hidden "
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-white pt-3 space-y-3 px-5 max-w-[60rem] w-full text-center">
        <h1 className="border-b-2 border-black inline text-[1.5rem] ">
          {slides[activeIndex].title}
        </h1>
        <p className="underline decoration-[1.5px] underline-offset-4 text-sm">
          {slides[activeIndex].content}
        </p>
      </div>
    </motion.div>
  );
};

export default HeroTextBlockSmallScreen;
