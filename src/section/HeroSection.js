"use client";

import { useState, useEffect } from "react";
import TypeWriter from "@/components/TypeWriter";

const slogans = [
  "Deux devs, un BTS, un rêve d’ingé, et déjà des projets solides.",
  "On n'écrit pas du code, on écrit votre histoire.",
  "Deux devs motivés, zéro ligne bâclée.",
  "Étudiants aujourd’hui, futurs ingénieurs demain. Sérieux dès maintenant.",
  "On ne code pas juste des sites, on fait vivre vos idées.",
];

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [randomSlogan, setRandomSlogan] = useState("");

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        const randomIndex = Math.floor(Math.random() * slogans.length);
        setRandomSlogan(slogans[randomIndex]);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center min-h-screen px-4 py-12 sm:py-16 md:py-20">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto">
        2Dev1Dream
      </h2>

      <div className="h-20 sm:h-24 flex items-center max-w-3xl mx-auto">
        <p className="italic text-base sm:text-lg md:text-xl leading-relaxed">
          {isMobile ? randomSlogan : <TypeWriter texts={slogans} />}
        </p>
      </div>

      <p className="text-base sm:text-lg md:text-xl max-w-5xl mx-auto leading-relaxed px-2">
        Nous sommes <span className="text-[#427AA1] font-semibold">Maël</span> et{" "}
        <span className="text-[#679436] font-semibold">James</span>, deux étudiants en fin de BTS CIEL-IR avec le rêve de devenir ingénieur.
        Cet été, on se lance un défi : devenir freelance pendant 4 mois pour{" "}
        <span className="text-[#679436] font-semibold">économiser pour nos études</span> et{" "}
        <span className="text-[#427AA1] font-semibold">gagner en expérience</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a href="/projects">
          <button className="button1 rounded-3xl px-6 py-2 text-sm sm:text-base">
            Voir nos projets
          </button>
        </a>
        <a href="https://comeup.com/fr/service/473851/creer-un-site-a-votre-image-moderne-sur-mesure-et-percutant" target="_blank" rel="noopener noreferrer">
          <button className="button2 rounded-3xl px-6 py-2 text-sm sm:text-base">
            Nous contacter
          </button>
        </a>
      </div>
    </section>
  );
}
