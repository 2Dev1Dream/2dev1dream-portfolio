import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="absolute bottom-0 inset-x-0 py-8 mt-16">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <img src="/Logo_1.png" alt="2dev1dream" className="w-12 h-12 mx-auto mb-2" />
          </div>
  
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/2dev1dream/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaSquareInstagram className="w-8 h-8 accent-blue hover:scale-110 transition-transform text-black" />
            </a>
            <a href="https://comeup.com/votre_profil" target="_blank" rel="noopener noreferrer" aria-label="ComeUp">
              <img src="/comeup_bleu.svg" alt="ComeUp" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
          </div>
  
          <div className="mt-3 text-gray-500">
            <p className="text-sm">© 2025 2Dev1Dream. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
