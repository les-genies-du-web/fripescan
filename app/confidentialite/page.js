export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-[#215B87] hover:text-[#e18343] transition-colors">
            ← Retour à l'accueil
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Dernière mise à jour : 21 décembre 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Données collectées</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.1 Données d'inscription</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Adresse email</li>
              <li>Nom d'utilisateur</li>
              <li>Mot de passe (crypté)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.2 Données d'utilisation</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Photos de vêtements scannés</li>
              <li>Historique des scans</li>
              <li>Statistiques d'utilisation</li>
              <li>Code de parrainage et filleuls</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.3 Données techniques</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Adresse IP</li>
              <li>Type d'appareil et système d'exploitation</li>
              <li>Données de navigation</li>
              <li>Identifiants de l'appareil</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Utilisation des données</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous utilisons vos données pour :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Fournir et améliorer nos services</li>
              <li>Analyser les vêtements scannés via l'IA</li>
              <li>Gérer votre compte et vos abonnements</li>
              <li>Traiter les paiements (via Stripe)</li>
              <li>Gérer le programme de parrainage</li>
              <li>Envoyer des notifications importantes</li>
              <li>Améliorer l'expérience utilisateur</li>
              <li>Prévenir la fraude et assurer la sécurité</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Base légale du traitement</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous traitons vos données sur les bases légales suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li><strong>Exécution du contrat</strong> : pour fournir nos services</li>
              <li><strong>Consentement</strong> : pour les notifications marketing</li>
              <li><strong>Intérêt légitime</strong> : pour améliorer nos services et prévenir la fraude</li>
              <li><strong>Obligation légale</strong> : pour respecter nos obligations fiscales et comptables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Partage des données</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous ne vendons jamais vos données personnelles. Nous partageons vos données uniquement avec :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li><strong>Firebase (Google)</strong> : hébergement et base de données</li>
              <li><strong>Stripe</strong> : traitement des paiements</li>
              <li><strong>OpenAI</strong> : analyse IA des vêtements (images uniquement, sans données personnelles)</li>
              <li><strong>Services de notifications push</strong> : envoi de notifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Conservation des données</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous conservons vos données :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Tant que votre compte est actif</li>
              <li>3 ans après la suppression de votre compte (obligations légales)</li>
              <li>Les photos de scans sont conservées tant que vous ne les supprimez pas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Vos droits (RGPD)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : supprimer vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit de limitation</strong> : limiter le traitement de vos données</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour exercer ces droits, contactez-nous à : privacy@fripescan.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">8. Sécurité des données</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Chiffrement des données en transit (HTTPS/TLS)</li>
              <li>Chiffrement des mots de passe</li>
              <li>Authentification sécurisée via Firebase</li>
              <li>Règles de sécurité Firestore strictes</li>
              <li>Surveillance et logs de sécurité</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">9. Cookies et technologies similaires</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous utilisons des cookies et technologies similaires pour :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Maintenir votre session connectée</li>
              <li>Analyser l'utilisation de l'application</li>
              <li>Personnaliser votre expérience</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">10. Transferts internationaux</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Vos données peuvent être transférées et stockées sur des serveurs situés en dehors de l'Union Européenne (notamment aux États-Unis via Firebase et OpenAI). Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">11. Mineurs</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan n'est pas destiné aux personnes de moins de 16 ans. Si vous avez moins de 16 ans, veuillez obtenir le consentement de vos parents avant d'utiliser notre service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">12. Modifications de la politique</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous pouvons modifier cette politique de confidentialité. Les modifications importantes vous seront notifiées par email ou via l'application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">13. Contact et réclamations</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour toute question concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Email : privacy@fripescan.fr</li>
              <li>Vous pouvez également déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
