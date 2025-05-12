"use client";

import SkillCard from "./SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaPhp,
  FaBootstrap,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiTailwindcss, SiFigma, SiCplusplus } from "react-icons/si";
import { BsSnow2 } from "react-icons/bs";

const skills = [
  { title: "HTML", icon: FaHtml5 },
  { title: "CSS", icon: FaCss3Alt },
  { title: "JavaScript", icon: FaJs },
  { title: "PHP", icon: FaPhp },
  { title: "Java", icon: FaJava },
  { title: "Python", icon: FaPython },
  { title: "C++", icon: SiCplusplus },
  { title: "React", icon: FaReact },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Tailwind", icon: SiTailwindcss },
  { title: "Bootstrap", icon: FaBootstrap },
  { title: "WinterCMS", icon: BsSnow2 },
  { title: "Git", icon: FaGitAlt },
  { title: "GitHub", icon: FaGithubSquare },
  { title: "MySQL", icon: SiMysql },
  { title: "Figma", icon: SiFigma },
];

export default function StaticSkillsList() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          icon={skill.icon}
          title={skill.title}
        />
      ))}
    </div>
  );
}
