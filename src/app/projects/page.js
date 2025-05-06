import { FocusCards } from "../../components/ui/focus-cards";

/* Liste de projets avec leurs détails */
// Chaque projet a un titre, une description, une pile technologique, une image, un lien GitHub et ce qui a été appris
const projects = [
    {
        /*Projet 2Dev1Dream*/
        title: "2Dev1Dream",
        description: "Portfolio professionnel pour présenter notre équipe, nos compétences et nos projets freelance.",
        stack: ["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
        image: "/Logo_1.png",
        github: "https://github.com/2Dev1Dream/2dev1dream-portfolio",
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
    },
    {
        title: "Projet 4",
        description: "Ipso ut quadam non ita se maxime quisque se amicitiis magnae ego spe quisque moribus causae de hercule ego earum.",
        stack: ["C#", ".NET", "SQL", "XML", "JSON"],
        image: "/test.png",
        github: "https://github.com/votre-utilisateur/alerter",
        learned: "Resistere cohortium abierat conati victu vicos concedentes victu propinquabant cohortium.",
    },
    {
        title: "Projet 5",
        description: "Ipso ut quadam non ita se maxime quisque se amicitiis magnae ego spe quisque moribus causae de hercule ego earum.",
        stack: ["C#", ".NET", "SQL", "XML", "JSON"],
        image: "/test.png",
        github: "https://github.com/votre-utilisateur/alerter",
        learned: "Resistere cohortium abierat conati victu vicos concedentes victu propinquabant cohortium.",
    },
    {
        title: "Projet 6",
        description: "Ipso ut quadam non ita se maxime quisque se amicitiis magnae ego spe quisque moribus causae de hercule ego earum.",
        stack: ["C#", ".NET", "SQL", "XML", "JSON"],
        image: "/test.png",
        github: "https://github.com/votre-utilisateur/alerter",
        learned: "Resistere cohortium abierat conati victu vicos concedentes victu propinquabant cohortium.",
    },
];
  
  
// Fonction principale pour afficher la page des projets
export default function ProjectsPage() {
    return (
        // Conteneur principal de la page
        <main className="px-6 py-12 max-w-6xl mx-auto">
        {/* Titre principal de la page */}
        <h1 className="text-4xl font-bold mb-10 text-center accent-blue">Nos projets</h1>
        
        {/* Composant FocusCards qui affiche les cartes des projets */}
        <FocusCards cards={projects} />
        </main>
    );
};
