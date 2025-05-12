"use client"; // Indique que ce composant est un composant client (React côté client)
import React, { useState } from "react";
import { cn } from "../../lib/utils.js"; // Fonction utilitaire pour concaténer des classes conditionnellement

// Composant pour afficher une carte individuelle
export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    // Gestion des événements de survol pour appliquer des effets visuels
    onMouseEnter={() => setHovered(index)} // Définit l'index de la carte survolée
    onMouseLeave={() => setHovered(null)} // Réinitialise l'état lorsqu'on quitte la carte
    className={cn(
      "w-[235px] sm:w-[250px] md:w-[275px] lg:w-[300px] rounded-2xl relative bg-[#EBF2FA] dark:bg-neutral-900 overflow-hidden shadow-lg transition-all duration-300 ease-out p-4 flex flex-wrap justify-center gap-1", // Classes de base pour le style
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]", // Applique un flou et un effet de réduction si une autre carte est survolée 
    )}
  >
    {/* Image de la carte */}
    <img
      src={card.image} // Source de l'image
      alt={card.title} // Texte alternatif pour l'image
      className="rounded-lg w-full aspect-video object-cover mb-4" // Style de l'image
    />
    {/* Titre de la carte */}
    <h2 className="text-xl font-semibold text-[#427AA1] mb-2">
      <a href={card.github} target="_blank" rel="noopener noreferrer" className="link">
        {card.title} {/* Lien vers le dépôt GitHub du projet */}
      </a>
    </h2>
    {/* Description du projet */}
    <p className="text-center text-sm text-gray-700 mb-4">{card.description}</p>
    {/* Liste des technologies utilisées */}
    <div className="mb-4">
      <p className="text-center text-sm font-semibold text-[#427AA1] mb-1">Langages :</p>
      <ul className="flex flex-wrap gap-2 justify-center">
        {card.stack.map((tech, i) => (
          <li key={i} className="bg-[#A4BD01] text-white text-xs px-3 py-1 rounded-full">
            {tech} {/* Affiche chaque technologie */}
          </li>
        ))}
      </ul>
    </div>
    {/* Ce qui a été appris grâce au projet */}
    <p className="text-center text-sm text-gray-600 italic">{card.learned}</p>
  </div>
));

Card.displayName = "Card"; // Définit un nom d'affichage pour le composant (utile pour le débogage)

import { useEffect } from "react";

// Hook personnalisé pour détecter si l'utilisateur est sur un écran mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false); // État pour savoir si l'écran est mobile

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024); // Vérifie si la largeur de l'écran est inférieure à 1024px
    check(); // Vérifie immédiatement au chargement
    window.addEventListener("resize", check); // Ajoute un écouteur pour détecter les changements de taille d'écran
    return () => window.removeEventListener("resize", check); // Nettoie l'écouteur lors du démontage
  }, []);

  return isMobile; // Retourne true si l'écran est mobile
}

// Composant principal pour afficher les cartes
export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null); // État pour suivre la carte actuellement survolée
  const isMobile = useIsMobile(); // Utilise le hook pour détecter si l'écran est mobile

  return (
    <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto px-4">
      {/* Affiche chaque carte */}
      {cards.map((card, index) => (
        <Card
          key={card.title} // Clé unique pour chaque carte
          card={card} // Données de la carte
          index={index} // Index de la carte
          hovered={isMobile ? null : hovered} // Désactive le flou sur mobile
          setHovered={setHovered} // Fonction pour mettre à jour l'état de survol
        />
      ))}
    </div>
  );
}
