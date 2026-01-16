import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function MentionsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20 py-12 px-4">
        <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Mentions Légales
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : 21 décembre 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Éditeur du site</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site fripescan.fr et l'application mobile FripeScan sont édités par :
            </p>
            <ul className="list-none text-gray-600 mb-4">
              <li><strong>Raison sociale :</strong> Société par actions simplifiée</li>
              <li><strong>SIRET :</strong> 900 498 262 00022</li>
              <li><strong>Numéro de TVA intracommunautaire :</strong> FR81900498262</li>
              <li><strong>Code APE/NAF :</strong> 6201Z - Programmation informatique</li>
              <li><strong>Date de création :</strong> 17 juin 2021</li>
              <li><strong>Siège social :</strong> 7 Rue du Château, 27930 Fauville, France</li>
              <li><strong>Dirigeant :</strong> Suat IZMIR</li>
              <li><strong>Email :</strong> contact@fripescan.fr</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Directeur de la publication</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le directeur de la publication est : <strong>Suat IZMIR</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Hébergement</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">3.1 Site web</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site fripescan.fr est hébergé par :
            </p>
            <ul className="list-none text-gray-600 mb-4">
              <li><strong>Netlify, Inc.</strong></li>
              <li>2325 3rd Street, Suite 296</li>
              <li>San Francisco, CA 94107</li>
              <li>États-Unis</li>
              <li>Site web : <a href="https://www.netlify.com" className="text-[#2558A5] hover:text-[#E1AC42]">www.netlify.com</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">3.2 Application mobile et base de données</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'application mobile et les données sont hébergées par :
            </p>
            <ul className="list-none text-gray-600 mb-4">
              <li><strong>Google LLC (Firebase)</strong></li>
              <li>1600 Amphitheatre Parkway</li>
              <li>Mountain View, CA 94043</li>
              <li>États-Unis</li>
              <li>Site web : <a href="https://firebase.google.com" className="text-[#2558A5] hover:text-[#E1AC42]">firebase.google.com</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Propriété intellectuelle</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'ensemble des contenus présents sur le site fripescan.fr et l'application FripeScan (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) sont la propriété exclusive de FripeScan, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de FripeScan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Données personnelles</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan s'engage à respecter la vie privée de ses utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre <a href="/legal/privacy" className="text-[#2558A5] hover:text-[#E1AC42]">Politique de Confidentialité</a>.
            </p>
            <ul className="list-none text-gray-600 mb-4">
              <li><strong>Responsable du traitement :</strong> FripeScan</li>
              <li><strong>Contact DPO :</strong> privacy@fripescan.fr</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site fripescan.fr utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Limitation de responsabilité</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site et l'application, mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les estimations de prix fournies par l'intelligence artificielle sont indicatives et ne constituent pas une garantie de valeur marchande.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Liens hypertextes</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site fripescan.fr peut contenir des liens vers d'autres sites. FripeScan n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Droit applicable</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation du site fripescan.fr ou de l'application FripeScan sera soumis à la compétence exclusive des tribunaux français.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Contact</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour toute question ou réclamation concernant le site ou l'application, vous pouvez nous contacter :
            </p>
            <ul className="list-none text-gray-600 mb-4">
              <li><strong>Email :</strong> contact@fripescan.fr</li>
              <li><strong>Support :</strong> support@fripescan.fr</li>
            </ul>
          </section>

        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
