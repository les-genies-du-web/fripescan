'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MentionsLegalesPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/legal/mentions')
  }, [router])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-[#2558A5] hover:text-[#E1AC42] transition-colors">
            ← Retour à l'accueil
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Redirection en cours...
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Dernière mise à jour : 23 décembre 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Éditeur du site</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site FripeScan est édité par :
            </p>
            <ul className="list-none pl-0 text-gray-600 dark:text-gray-400 mb-4">
              <li className="mb-2"><strong>Raison sociale :</strong> Société par actions simplifiée</li>
              <li className="mb-2"><strong>SIRET :</strong> 900 498 262 00022</li>
              <li className="mb-2"><strong>Numéro de TVA intracommunautaire :</strong> FR81900498262</li>
              <li className="mb-2"><strong>Code APE/NAF :</strong> 6201Z - Programmation informatique</li>
              <li className="mb-2"><strong>Date de création :</strong> 17 juin 2021</li>
              <li className="mb-2"><strong>Siège social :</strong> 7 Rue du Château, 27930 Fauville, France</li>
              <li className="mb-2"><strong>Dirigeant :</strong> Suat IZMIR</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Contact</h2>
            <ul className="list-none pl-0 text-gray-600 dark:text-gray-400 mb-4">
              <li className="mb-2"><strong>Email :</strong> contact@fripescan.fr</li>
              <li className="mb-2"><strong>Support :</strong> support@fripescan.fr</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Hébergement</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site est hébergé par :
            </p>
            <ul className="list-none pl-0 text-gray-600 dark:text-gray-400 mb-4">
              <li className="mb-2"><strong>Netlify, Inc.</strong></li>
              <li className="mb-2">2325 3rd Street, Suite 296</li>
              <li className="mb-2">San Francisco, California 94107</li>
              <li className="mb-2">États-Unis</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les données sont également hébergées sur :
            </p>
            <ul className="list-none pl-0 text-gray-600 dark:text-gray-400 mb-4">
              <li className="mb-2"><strong>Google Firebase</strong></li>
              <li className="mb-2">Google LLC</li>
              <li className="mb-2">1600 Amphitheatre Parkway</li>
              <li className="mb-2">Mountain View, CA 94043</li>
              <li className="mb-2">États-Unis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Directeur de la publication</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le directeur de la publication du site est : <strong>Suat IZMIR</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Propriété intellectuelle</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de FripeScan, sauf mention contraire.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de FripeScan.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              La marque FripeScan ainsi que les logos sont des marques déposées. Toute reproduction totale ou partielle de ces marques ou de ces logos, effectuée à partir des éléments du site sans l'autorisation expresse de FripeScan est prohibée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Données personnelles</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour toute information concernant la collecte et le traitement de vos données personnelles, veuillez consulter notre{' '}
              <a href="/confidentialite" className="text-[#2558A5] hover:text-[#E1AC42] underline">
                Politique de Confidentialité
              </a>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour exercer ces droits, contactez-nous à : privacy@fripescan.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En utilisant ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">8. Limitation de responsabilité</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, FripeScan ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les estimations de prix fournies par l'application sont indicatives et basées sur l'analyse IA. FripeScan ne garantit pas l'exactitude de ces estimations et ne peut être tenue responsable des transactions effectuées sur la base de ces informations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">9. Liens hypertextes</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site peut contenir des liens hypertextes vers d'autres sites. FripeScan n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">10. Droit applicable</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">11. Médiation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Conformément à l'article L.612-1 du Code de la consommation, nous proposons un dispositif de médiation de la consommation. L'entité de médiation retenue est :
            </p>
            <ul className="list-none pl-0 text-gray-600 dark:text-gray-400 mb-4">
              <li className="mb-2"><strong>CNPM - Médiation de la consommation</strong></li>
              <li className="mb-2">27 avenue de la Libération</li>
              <li className="mb-2">42400 Saint-Chamond</li>
              <li className="mb-2">Site web : <a href="https://cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" className="text-[#2558A5] hover:text-[#E1AC42] underline">cnpm-mediation-consommation.eu</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">12. Crédits</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Conception et développement : FripeScan
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Technologies utilisées : Next.js, React, Firebase, OpenAI
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
