import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function CGVPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20 py-12 px-4">
        <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Conditions Générales de Vente
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : 16 janvier 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Objet</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les présentes Conditions Générales de Vente (CGV) régissent la vente de l'abonnement Premium de l'application FripeScan entre FripeScan (ci-après "le Vendeur") et toute personne physique ou morale souhaitant procéder à un achat (ci-après "l'Acheteur").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Produits et services</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">2.1 Offre gratuite</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'application FripeScan propose une offre gratuite comprenant :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>3 scans par semaine (renouvelés chaque lundi)</li>
              <li>Analyse IA des vêtements</li>
              <li>Estimation de prix basée sur le marché</li>
              <li>Historique des 30 derniers scans</li>
              <li>Programme de parrainage</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">2.2 Abonnement Premium</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'abonnement Premium offre les avantages suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Scans illimités</li>
              <li>Analyse IA avancée avec détection des défauts</li>
              <li>Estimations ultra-précises (+15% de précision)</li>
              <li>Historique illimité avec statistiques de vente</li>
              <li>Export PDF professionnel</li>
              <li>Publication automatique multi-plateformes</li>
              <li>Support prioritaire (réponse en 2h)</li>
              <li>Accès anticipé aux nouvelles fonctionnalités</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Prix</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les prix de l'abonnement Premium sont les suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>Mensuel :</strong> 4,99 € TTC par mois</li>
              <li><strong>Annuel :</strong> 49,99 € TTC par an (soit 4,17 €/mois)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les prix sont indiqués en euros toutes taxes comprises (TTC). FripeScan se réserve le droit de modifier ses tarifs à tout moment. Les modifications tarifaires ne s'appliquent pas aux abonnements en cours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Commande et paiement</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">4.1 Processus de commande</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              La souscription à l'abonnement Premium s'effectue directement dans l'application mobile via :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Apple App Store (pour iOS)</li>
              <li>Google Play Store (pour Android)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">4.2 Moyens de paiement</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les paiements sont traités de manière sécurisée par :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Apple In-App Purchase pour iOS</li>
              <li>Google Play Billing pour Android</li>
              <li>Stripe pour les paiements web</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">4.3 Renouvellement automatique</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'abonnement Premium est à tacite reconduction. Il se renouvelle automatiquement à la fin de chaque période (mensuelle ou annuelle) sauf résiliation par l'utilisateur avant la date de renouvellement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Droit de rétractation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Conformément à l'article L221-28 du Code de la consommation, vous disposez d'un délai de 14 jours à compter de la souscription pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour exercer ce droit, contactez-nous à : support@fripescan.fr
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              En cas de rétractation, vous serez remboursé de la totalité des sommes versées dans un délai de 14 jours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Résiliation</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">6.1 Résiliation par l'utilisateur</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Vous pouvez résilier votre abonnement Premium à tout moment :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Depuis les paramètres de l'application</li>
              <li>Depuis votre compte App Store (iOS)</li>
              <li>Depuis votre compte Google Play (Android)</li>
              <li>En contactant support@fripescan.fr</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              La résiliation prend effet à la fin de la période d'abonnement en cours. Aucun remboursement au prorata n'est effectué.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">6.2 Résiliation par FripeScan</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan se réserve le droit de résilier un abonnement en cas de :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Violation des Conditions Générales d'Utilisation</li>
              <li>Utilisation frauduleuse du service</li>
              <li>Non-paiement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Garantie satisfait ou remboursé</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan offre une garantie satisfait ou remboursé de 30 jours sur le premier abonnement Premium. Si vous n'êtes pas satisfait, contactez support@fripescan.fr dans les 30 jours suivant votre souscription pour obtenir un remboursement intégral.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cette garantie ne s'applique qu'une seule fois par utilisateur et uniquement sur le premier abonnement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Responsabilité</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan s'engage à fournir un service de qualité. Toutefois :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Les estimations de prix sont indicatives et ne constituent pas une garantie de valeur marchande</li>
              <li>FripeScan ne peut être tenu responsable des transactions effectuées sur la base de ces estimations</li>
              <li>FripeScan ne garantit pas une disponibilité 24/7 du service</li>
              <li>FripeScan ne peut être tenu responsable des interruptions temporaires pour maintenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Données personnelles</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les données personnelles collectées lors de la souscription sont traitées conformément à notre <a href="/legal/privacy" className="text-[#2558A5] hover:text-[#E1AC42] underline">Politique de Confidentialité</a> et au RGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Propriété intellectuelle</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              L'abonnement Premium vous donne un droit d'utilisation personnel et non exclusif de l'application FripeScan. Vous ne pouvez pas :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Revendre ou transférer votre abonnement</li>
              <li>Partager votre compte avec des tiers</li>
              <li>Copier, modifier ou distribuer le contenu de l'application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Modification des CGV</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              FripeScan se réserve le droit de modifier les présentes CGV à tout moment. Les utilisateurs seront informés des modifications importantes par notification dans l'application. Les nouvelles CGV s'appliquent aux nouveaux abonnements. Pour les abonnements en cours, les anciennes CGV restent applicables jusqu'au renouvellement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Médiation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              En cas de litige, vous pouvez recourir à une médiation de la consommation auprès de :
            </p>
            <ul className="list-none pl-0 text-gray-600 mb-4">
              <li><strong>CNPM - Médiation de la consommation</strong></li>
              <li>27 avenue de la Libération</li>
              <li>42400 Saint-Chamond</li>
              <li>Site web : <a href="https://cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" className="text-[#2558A5] hover:text-[#E1AC42] underline">cnpm-mediation-consommation.eu</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Droit applicable et juridiction</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Les présentes CGV sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Contact</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pour toute question concernant ces CGV ou votre abonnement :
            </p>
            <ul className="list-none pl-0 text-gray-600 mb-4">
              <li><strong>Email :</strong> support@fripescan.fr</li>
              <li><strong>Service client :</strong> Disponible du lundi au vendredi, 9h-18h</li>
            </ul>
          </section>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
