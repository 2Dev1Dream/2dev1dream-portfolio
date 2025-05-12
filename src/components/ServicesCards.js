import { HoverEffect } from "../components/ui/card-hover-effect";
import { CodeIcon, RefreshCwIcon, RocketIcon } from "lucide-react";

export function ServicesCards() {
  const services = [
    {
      id: "vitrine",
      title: "Site vitrine",
      description: "Présentez votre activité avec un site clair, responsive et rapide.",
      icon: <CodeIcon />,
    },
    {
      id: "refonte",
      title: "Refonte & optimisation",
      description: "Modernisez un site existant, améliorez ses performances.",
      icon: <RefreshCwIcon />,
    },
    {
      id: "prototype",
      title: "Prototype personnalisé",
      description: "Un site fictif ou conceptuel pour illustrer une idée.",
      icon: <RocketIcon />,
    },
  ];

  return <HoverEffect items={services} />;
}
