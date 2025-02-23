import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../../app/globals.css";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import HeroTextBlockSmallScreen from "./HeroTextBlockSmallScreen";
import HerorTextBlockLargeScreen from "./HerorTextBlockLargeScreen";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Vision & Strategy",
      imgUrl: "/hero2.jpeg",
      content:
        "We believe that wise application of AI and breakthrough technologies will result in a more connected, empowered, and joyful world.",
    },
    {
      id: 2,
      title: "Earnings Results for Q3 FY2024",
      imgUrl: "/hero1.jpeg",
      content:
        "SoftBank Group Corp. announced its Earnings Results on February 12, 2025 for the third quarter of the fiscal year ending March 31, 2025.",
    },
    {
      id: 3,
      title: "SoftBank Group Report 2024",
      imgUrl: "/hero3.jpeg",
      content:
        "This annual report presents our corporate story, showing how our strategy and business model will deliver our core philosophy and vision, how we will build value, and how we will enable 300 years of sustained growth.",
    },
  ];

  return (
    <>
      {/* Swiper Section */}
      <Swiper
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="w-full h-[50vh] md:h-[60vh] lg:h-[100vh]"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map(({ id, imgUrl, title, content }, i) => (
          <SwiperSlide key={id} className="relative w-full ">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={imgUrl}
                alt={title + "img"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-white text-center h-full px-4">
              {i === 0 && (
                <div className="space-y-4 mt-10">
                  <h1 className="md:text-5xl text-2xl font-semibold">
                    Information Revolution
                  </h1>
                  <p className="md:text-2xl text-xl font-medium text-slate-100">
                    <span className="font-light"> &ndash;&ndash;</span>
                    Happiness for everyone
                  </p>
                </div>
              )}

              {/* Animated Text Block - Only for Large Screens */}
              <HerorTextBlockLargeScreen
                content={content}
                title={title}
                activeIndex={activeIndex}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animated Text Block - Only for Small Screens */}
      <HeroTextBlockSmallScreen slides={slides} activeIndex={activeIndex} />
    </>
  );
};

export default Hero;
