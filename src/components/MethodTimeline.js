"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Échange & compréhension",
    description: "On commence par comprendre votre besoin lors d'un appel ou échange de messages.",
    icon: <MessageCircle className="w-6 h-6 text-white" />,
  },
  {
    title: "Proposition claire",
    description: "On vous propose une solution personnalisée, avec prix et délais transparents.",
    icon: <FileText className="w-6 h-6 text-white" />,
  },
  {
    title: "Conception & développement",
    description: "On développe votre site avec des points réguliers pour intégrer vos retours.",
    icon: <Code2 className="w-6 h-6 text-white" />,
  },
  {
    title: "Livraison & ajustements",
    description: "Vous recevez un site clé en main, avec les derniers ajustements si besoin.",
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
];

export default function MethodTimeline() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Notre méthode
        </h2>

        <div className="flex flex-col space-y-30 relative">
          {/* Ligne verticale */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gray-200" />

          {steps.map((step, index) => {
            const content = (
              <div className="relative flex items-start space-x-6" key={index}>
                {/* Icône circulaire */}
                <div className="flex items-center justify-center w-12 h-12 bg-[#427AA1] rounded-full z-10 relative">
                  {step.icon}
                </div>

                {/* Contenu */}
                <div>
                  <h3 className="text-lg font-semibold !text-[#A4BD01]">
                    {step.title}
                  </h3>
                  <p className="text-black-200 mt-1 max-w-md">{step.description}</p>
                </div>
              </div>
            );

            return isDesktop ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {content}
              </motion.div>
            ) : (
              content
            );
          })}
        </div>
      </div>
    </section>
  );
}
