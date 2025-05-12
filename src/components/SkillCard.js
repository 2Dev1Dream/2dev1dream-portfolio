"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillCard({ icon: Icon, title, isImage = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#EBF2FA] dark:bg-[#b9cde0] p-4 rounded-2xl shadow-md flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl border border-[#427AA1] dark:border-[#EBF2FA] w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]"
    >
      {isImage ? (
        <Image
          src={Icon}
          alt={title}
          width={40}
          height={40}
          className="filter invert-[45%] sepia-[23%] saturate-[745%] hue-rotate-[170deg] brightness-[92%] contrast-[89%] sm:w-8 sm:h-8 md:w-10 md:h-10"
        />
      ) : (
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#427AA1]" />
      )}
      <span className="text-xs sm:text-base md:text-lg font-semibold text-[#427AA1] dark:text-[#427AA1]">
        {title}
      </span>
    </motion.div>
  );
}
