"use client";
import Funds from "@/components/Funds/Funds";
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";

import News from "@/components/News/News";
import Relations from "@/components/Relations/Relations";
import Segments from "@/components/Segments/Segments";
import Sustainability from "@/components/Sustainability/Sustainability";

import Vision from "@/components/Vision/Vision";
import Warning from "@/components/Warning/Warning";
import { useEffect, useState } from "react";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <>
      <Hero />
      <News />
      <div className="bg-[#f1f1f3] pb-20">
        <Vision />
        <Segments />
        <Funds />
        <Relations />
        <Sustainability />
        <Info />
        <Warning />
      </div>
    </>
  );
}
