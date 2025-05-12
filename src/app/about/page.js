'use client';
import FullScreenSection from "@/components/FullScreenSection";

export default function AboutPage() {
  return (
    <main>
      {/* Présentation */}
      <FullScreenSection>
        <>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-[#427AA1]">
            Qui sommes-nous ?
          </h2>
          <p className="mb-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
            Nous sommes <strong className="accent-green">James</strong> et <strong className="accent-blue">Maël</strong>, deux meilleurs amis passionnés de développement web, âgés de 19 et 22 ans.  
            Après avoir étudié ensemble en BTS CIEL-IR, nous intégrerons l’année prochaine l’école d’ingénieurs ISEN, avec un objectif clair : <strong>devenir ingénieurs</strong> et construire notre avenir autour du code et de l’innovation.
          </p>
        </>
      </FullScreenSection>

      {/* Le projet */}
      <FullScreenSection>
        <>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-[#427AA1]">
            Pourquoi 2Dev1Dream ?
          </h2>
          <p className="mb-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
            Nous avons lancé <strong className="accent-blue">2Dev1Dream</strong> pour vivre une véritable aventure humaine et professionnelle. Ce projet, c’est notre défi :{" "}
            <span className="accent-blue font-semibold">progresser</span>,{" "}
            <span className="accent-green font-semibold">apprendre</span>,{" "}
            <span className="accent-blue font-semibold">entreprendre</span> — et surtout, <strong>travailler en duo</strong> sur des projets concrets.
          </p>
        </>
      </FullScreenSection>

      {/* Objectifs */}
      <FullScreenSection>
        <>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-[#427AA1]">
            🎯 Notre objectif ?
          </h2>
          <p className="mb-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
            Acquérir de l’expérience en tant que développeurs freelance, financer nos études, et partager notre parcours avec transparence et authenticité.
            Pendant <strong>4 mois</strong>, nous allons relever le défi de décrocher nos premiers contrats freelance.  
            Tout sera documenté sur les réseaux sociaux : nos réussites, nos galères, nos projets, nos apprentissages.
            Nous croyons sincèrement que même en étant étudiants, il est possible de valoriser ses compétences, de créer des opportunités et de se lancer.
          </p>
        </>
      </FullScreenSection>

      {/* Valeurs */}
      <FullScreenSection>
        <>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-[#427AA1]">
            💪 Ce qui nous définit
          </h2>
          <p className="mb-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
            La motivation, la rigueur, l’envie de progresser — mais aussi la bienveillance, l’écoute et l’envie de s’épanouir dans ce qu’on fait.
            <br /><br />
            2Dev1Dream, c’est aussi l’occasion d’explorer notre complémentarité, de poser les bases d’une future entreprise, et d’inspirer d’autres personnes à oser se lancer dans le développement.
          </p>
        </>
      </FullScreenSection>

      {/* Réseaux sociaux */}
      <FullScreenSection>
        <>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-[#427AA1]">
            📲 Où nous suivre ?
          </h2>
          <p className="mb-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
            Suivez notre aventure sur les réseaux, découvrez nos projets perso, nos missions freelance sur <strong>ComeUp</strong> ou <strong>Malt</strong>, et notre quotidien de jeunes devs qui rêvent grand.
            <br /><br />
            Bienvenue dans l’univers de <strong>2Dev1Dream</strong>.
          </p>
        </>
      </FullScreenSection>
    </main>
  );
}
