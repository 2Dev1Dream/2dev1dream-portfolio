const Footer = () => {
    return (
      <footer className="py-8 mt-16">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <p>Contactez-nous : <a href="mailto:contact.2dev1dream@gmail.com" className="link text-lg font-semibold">contact.2dev1dream@gmail.com</a></p>
          </div>
  
          <div className="mb-6">
            <p className="text-sm text-gray-600">Restons connectés !</p>
          </div>
  
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/2dev1dream/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/insta.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.tiktok.com/@2dev1dream" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <img src="/tiktok.svg" alt="TikTok" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.malt.fr/profile/votreprofil" target="_blank" rel="noopener noreferrer" aria-label="Malt">
              <img src="/malt.svg" alt="Malt" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://comeup.com/votre_profil" target="_blank" rel="noopener noreferrer" aria-label="ComeUp">
              <img src="/comeup.svg" alt="ComeUp" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
          </div>
  
          <div className="mt-6 text-gray-500">
            <p className="text-sm">© 2025 2Dev1Dream. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  