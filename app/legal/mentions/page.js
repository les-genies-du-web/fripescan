export default function MentionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-[#215B87] hover:text-[#e18343] transition-colors">
            ← Retour à l'accueil
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Mentions Légales
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Dernière mise à jour : 21 décembre 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Éditeur du site</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site fripescan.fr et l'application mobile FripeScan sont édités par :
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-400 mb-4">
              <li><strong>Raison sociale :</strong> FripeScan</li>
              <li><strong>Forme juridique :</strong> [À compléter]</li>
              <li><strong>Capital social :</strong> [À compléter]</li>
              <li><strong>Siège social :</strong> [À compléter]</li>
              <li><strong>SIRET :</strong> [À compléter]</li>
              <li><strong>Email :</strong> contact@fripescan.fr</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Directeur de la publication</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le directeur de la publication est : [À compléter]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Hébergement</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.1 Site web</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site fripescan.fr est hébergé par :
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-400 mb-4">
              <li><strong>Netlify, Inc.</strong></li>
              <li>2325 3rd Street, Suite 296</li>
              <li>San Francisco, CA 94107</li>
              <li>États-Unis</li>
              <li>Site web : <a href="https://www.netlify.com" className="text-[#215B87] hover:text-[#e18343]">www.netlify.com</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.2 Application mobile et base de données</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'application mobile et les données sont hébergées par :
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-400 mb-4">
              <li><strong>Google LLC (Firebase)</strong></li>
              <li>1600 Amphitheatre Parkway</li>
              <li>Mountain View, CA 94043</li>
              <li>États-Unis</li>
              <li>Site web : <a href="https://firebase.google.com" className="text-[#215B87] hover:text-[#e18343]">firebase.google.com</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Propriété intellectuelle</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'ensemble des contenus présents sur le site fripescan.fr et l'application FripeScan (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) sont la propriété exclusive de FripeScan, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de FripeScan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Données personnelles</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan s'engage à respecter la vie privée de ses utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre <a href="/legal/privacy" className="text-[#215B87] hover:text-[#e18343]">Politique de Confidentialité</a>.
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-400 mb-4">
              <li><strong>Responsable du traitement :</strong> FripeScan</li>
              <li><strong>Contact DPO :</strong> privacy@fripescan.fr</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site fripescan.fr utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Limitation de responsabilité</h2>
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">8. Liens hypertextes</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le site fripescan.fr peut contenir des liens vers d'autres sites. FripeScan n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">9. Droit applicable</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation du site fripescan.fr ou de l'application FripeScan sera soumis à la compétence exclusive des tribunaux français.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">10. Contact</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour toute question ou réclamation concernant le site ou l'application, vous pouvez nous contacter :
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-400 mb-4">
              <li><strong>Email :</strong> contact@fripescan.fr</li>
              <li><strong>Support :</strong> support@fripescan.fr</li>
            </ul>
          </section>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mt-8">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note :</strong> Certaines informations marquées [À compléter] doivent être renseignées avec vos informations légales réelles (SIRET, adresse du siège social, etc.).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
