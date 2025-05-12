"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link || "#"}
          key={item.id}
          className="relative group block h-full w-full transition-transform duration-300 ease-in-out"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 sm:p-6 bg-[#EBF2FA] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 shadow-md hover:shadow-xl transition-shadow",
        className
      )}
    >
      <div className="relative z-50">
        <div className="flex flex-col items-center justify-center gap-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("!text-[#A4BD01] text-lg sm:text-xl font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn("text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300 leading-relaxed", className)}
    >
      {children}
    </p>
  );
};
