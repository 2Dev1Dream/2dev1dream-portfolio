import Image from "next/image";
import HeroSection from '@/section/HeroSection';
import SkillsSection from "@/section/SkillsSection";
import ServicesSection from "@/section/ServicesSection";
import MethodSection from "@/section/MethodSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <main className="flex flex-col items-center justify-center gap-8 text-center">
        <HeroSection />
        
        <SkillsSection />
        
        <ServicesSection />

        <MethodSection />
      </main>
    </div>
  );
}
