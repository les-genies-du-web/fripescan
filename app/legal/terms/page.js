export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-[#215B87] hover:text-[#e18343] transition-colors">
            ← Retour à l'accueil
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Conditions Générales d'Utilisation
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Dernière mise à jour : 21 décembre 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Présentation du service</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan est une application mobile qui permet aux utilisateurs de scanner et d'évaluer des vêtements de seconde main grâce à l'intelligence artificielle. Le service est édité par FripeScan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Acceptation des conditions</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              En utilisant FripeScan, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Inscription et compte utilisateur</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour utiliser certaines fonctionnalités de FripeScan, vous devez créer un compte. Vous vous engagez à :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Fournir des informations exactes et à jour</li>
              <li>Maintenir la sécurité de votre mot de passe</li>
              <li>Ne pas partager votre compte avec des tiers</li>
              <li>Nous informer immédiatement de toute utilisation non autorisée</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Utilisation du service</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.1 Offre gratuite</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les utilisateurs gratuits bénéficient de 3 scans par semaine. Cette limite est réinitialisée chaque semaine.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.2 Offre Premium</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'abonnement Premium offre des scans illimités et des fonctionnalités avancées. Les tarifs sont disponibles dans l'application.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.3 Programme de parrainage</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Le parrain et le filleul reçoivent chacun 5 scans bonus lors d'une inscription via un code de parrainage. Les scans bonus n'ont pas de date d'expiration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Propriété intellectuelle</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tous les contenus présents sur FripeScan (textes, images, logos, code source) sont protégés par le droit d'auteur et appartiennent à FripeScan ou à ses partenaires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Limitation de responsabilité</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les estimations fournies par FripeScan sont indicatives et basées sur l'intelligence artificielle. Nous ne garantissons pas l'exactitude absolue des évaluations. FripeScan ne peut être tenu responsable :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Des transactions effectuées sur la base de nos estimations</li>
              <li>Des interruptions temporaires du service</li>
              <li>Des pertes de données en cas de problème technique</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Résiliation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application. Nous nous réservons le droit de suspendre ou supprimer un compte en cas de violation des présentes CGU.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">8. Modification des CGU</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous nous réservons le droit de modifier ces CGU à tout moment. Les utilisateurs seront informés des modifications importantes par notification dans l'application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">9. Droit applicable</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">10. Contact</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour toute question concernant ces CGU, vous pouvez nous contacter à : contact@fripescan.fr
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
