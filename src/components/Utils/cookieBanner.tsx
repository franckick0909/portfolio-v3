import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    // Ici, vous pouvez ajouter le code pour activer les cookies
  };

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
    // Ici, vous pouvez ajouter le code pour désactiver les cookies
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 shadow-md z-[2002]"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm md:text-base font-marcellus font-light text-white mb-4 sm:mb-0 sm:mr-4"> 
            Nous ne collectons aucune donnée personnelle à des fins publicitaires ou d&apos;analyse. 
            En continuant à utiliser ce site, vous acceptez notre utilisation des cookies.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={acceptCookies}
                className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition-colors"
              >
                Accepter
              </button>
              <button
                type="button"
                onClick={refuseCookies}
                className="bg-white text-black px-4 py-2 rounded text-sm hover:bg-gray-800 hover:text-white transition-colors"
              >
                Refuser
              </button>
            </div>
          </div>
          <div className="text-xs mt-2 text-center">
            <Link href="/politique-de-confidentialite" className="text-gray-500 hover:underline">
              En savoir plus sur notre politique de confidentialité
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
