import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 md:py-8 mt-16 border-t border-gray-200 bg-[#EBF2FA]">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <a href="/" rel="noopener noreferrer" aria-label="Acceuil">
            <img src="/Logo_1.png" alt="2dev1dream" className="w-6 h-10 sm:w-12 sm:h-16 hover:scale-110 transition-transform"/>
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-6 mb-4 flex-wrap">
          {/* ComeUp */}
          <a href="https://comeup.com/fr/@2dev1dream" target="_blank" rel="noopener noreferrer" aria-label="ComeUp">
            <img src="/comeup_bleu.svg" alt="ComeUp" className="w-4 h-4 sm:w-8 sm:h-8 hover:scale-110 transition-transform"/>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/2dev1dream/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaSquareInstagram className="w-4 h-4 sm:w-8 sm:h-8 accent-blue hover:scale-110 transition-transform text-black dark:text-white" />
          </a>
          {/* Tiktok */}
          <a href="https://www.tiktok.com/@2dev1dream" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
            <FaTiktok className="w-4 h-4 sm:w-8 sm:h-8 accent-blue hover:scale-110 transition-transform text-black dark:text-white" />
          </a>
        </div>

        {/* Texte copyright */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">
          © 2025 2Dev1Dream. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
