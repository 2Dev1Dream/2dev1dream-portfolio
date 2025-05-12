"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FullScreenSection({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    // Pas d'animation sur mobile
    return (
      <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-12 sm:py-24">
        <div className="w-full max-w-3xl text-center">{children}</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-12 sm:py-24">
      <motion.div
        className="w-full max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
