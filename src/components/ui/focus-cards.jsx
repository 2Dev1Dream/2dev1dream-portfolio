"use client";;
import React, { useState } from "react";
import { cn } from "../../lib/utils.js";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-2xl relative bg-white dark:bg-neutral-900 overflow-hidden shadow-lg transition-all duration-300 ease-out p-4 flex flex-col justify-between",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.image}
      alt={card.title}
      className="rounded-lg w-full h-48 object-cover mb-4"
    />
    <h2 className="text-xl font-semibold text-[#427AA1] mb-2">
      <a href={card.github} target="_blank" rel="noopener noreferrer" className="link">
        {card.title}
      </a>
    </h2>
    <p className="text-sm text-gray-700 mb-4">{card.description}</p>
    <div className="mb-4">
      <p className="text-sm font-semibold text-[#427AA1] mb-1">Langages :</p>
      <ul className="flex flex-wrap gap-2">
        {card.stack.map((tech, i) => (
          <li key={i} className="bg-[#A4BD01] text-white text-xs px-3 py-1 rounded-full">
            {tech}
          </li>
        ))}
      </ul>
    </div>
    <p className="text-sm text-gray-600 italic">{card.learned}</p>
  </div>
));

Card.displayName = "Card";

import { useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768); // < md
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  const isMobile = useIsMobile();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={isMobile ? null : hovered} // désactive le flou sur mobile
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
