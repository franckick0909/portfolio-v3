import { Metadata } from 'next'
import PageTransition from "@/components/pageTransition";
import PageEnterTransition from "@/components/pageEnterTransition";

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Franck Chapelon',
  description: 'Politique de confidentialité du site de Franck Chapelon',
}

export default function PolitiqueDeConfidentialite() {
  return (
    <PageTransition>
      <PageEnterTransition>
        <section className="bg-white min-h-screen h-full w-full flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-8">
            <h1 className="text-4xl font-bold mb-6">Politique de confidentialité</h1>
          <div className="prose max-w-none text-black text-lg">
            <p>Dernière mise à jour : 15/10/2024</p>
            <h2 className="text-xl font-bold my-4">1. Collecte d&apos;informations</h2>
            <p>Nous collectons les informations suivantes :</p>
            <ul>
              <li>Nom</li>
              <li>Adresse e-mail</li>
              {/* Ajoutez d'autres informations collectées */}
            </ul>

            <h2 className="text-xl font-bold my-4">2. Utilisation des informations</h2>
            <p>Les informations que nous collectons sont utilisées pour :</p>
            <ul>
              <li>Personnaliser l&apos;expérience utilisateur</li>
              <li>Améliorer notre site</li>
              {/* Ajoutez d&apos;autres utilisations */}
            </ul>

            {/* Ajoutez d'autres sections pertinentes */}

            <h2 className="text-xl font-bold my-4">Contact</h2>
            <p>Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à :</p>
            <p>[Votre adresse e-mail de contact]</p>
          </div>
          </div>
        </section>
      </PageEnterTransition>
    </PageTransition>
  );
}