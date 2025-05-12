'use client';

import FadeInSection from '@/components/FadeInSection';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <FadeInSection>
        <>
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 text-transparent bg-clip-text">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-gray-800">
            Nous sommes <strong className="text-blue-600">James</strong> et <strong className="text-green-600">Maël</strong>...
          </p>
        </>
      </FadeInSection>

      <FadeInSection>
        <>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 text-transparent bg-clip-text">
            Notre objectif ?
          </h3>
          <p className="text-lg text-gray-800">
            Acquérir de l’expérience en freelance...
          </p>
        </>
      </FadeInSection>

      <FadeInSection>
        <>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 text-transparent bg-clip-text">
            Ce qui nous définit ?
          </h3>
          <p className="text-lg text-gray-800">
            La motivation, la rigueur, la bienveillance...
          </p>
        </>
      </FadeInSection>

      <FadeInSection>
        <>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 text-transparent bg-clip-text">
            Où nous trouver ?
          </h3>
          <p className="text-lg text-gray-800">
            Suivez notre aventure sur ComeUp, Malt...
          </p>
        </>
      </FadeInSection>
    </main>
  );
}
