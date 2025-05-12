"use client";

import { useEffect, useState } from "react";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import StaticSkillsList from "@/components/StaticSkillsList";

export default function SkillsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // < md
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center mb-50">
      <div className="min-w-full mx-auto text-center">
        <h3 className="text-4xl font-bold mb-10">Nos compétences</h3>
        {isMobile ? <StaticSkillsList /> : <InfiniteMovingCardsDemo />}
      </div>
    </section>
  );
}
