import { FocusCards } from "../../components/ui/focus-cards";

const projects = [
    {
        title: "2Dev1Dream",
        description: "Portfolio professionnel développé avec Next.js et Tailwind CSS pour présenter notre équipe, nos compétences et nos projets freelance.",
        stack: ["Next.js", "React", "Tailwind CSS"],
        image: "/Logo_1.png",
        github: "https://github.com/votre-utilisateur/2dev1dream",
        learned: "Création d'une identité visuelle, responsive design, intégration d'animations, optimisation SEO et déploiement.",
    },
    {
      title: "Projet 2",
      description: "Ipso ut quadam non ita se maxime quisque se amicitiis magnae ego spe quisque moribus causae de hercule ego earum.",
      stack: ["C#", ".NET", "SQL", "XML", "JSON"],
      image: "/test.png",
      github: "https://github.com/votre-utilisateur/alerter",
      learned: "Resistere cohortium abierat conati victu vicos concedentes victu propinquabant cohortium.",
    },
    {
      title: "Projet 3",
      description: "Ipso ut quadam non ita se maxime quisque se amicitiis magnae ego spe quisque moribus causae de hercule ego earum.",
      stack: ["C#", "ASP.NET", "LINQ", "HTML/CSS"],
      image: "/test.png",
      github: "https://github.com/votre-utilisateur/minions",
      learned: "Resistere cohortium abierat conati victu vicos concedentes victu propinquabant cohortium.",
    }
  ];
  
  export default function ProjectsPage() {
    return (
      <main className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center accent-blue">Nos projets</h1>
        <FocusCards cards={projects} />
      </main>
    );
  };
  