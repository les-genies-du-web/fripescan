export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <a href="/" className="text-[#215B87] hover:text-[#e18343] transition-colors">
            ← Retour à l'accueil
          </a>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Choisissez votre formule
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Commencez gratuitement ou passez Premium pour des scans illimités et des fonctionnalités avancées
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Plan Gratuit */}
          <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-3xl p-8 hover:scale-105 transition-transform">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Gratuit</h2>
              <div className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                0€
                <span className="text-xl text-gray-600 dark:text-gray-400">/mois</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Parfait pour découvrir FripeScan</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#215B87] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>3 scans par semaine</strong> renouvelés automatiquement
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#215B87] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Analyse IA des vêtements
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#215B87] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Estimation de prix
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#215B87] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Historique des scans
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#215B87] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Programme de parrainage</strong> : +5 scans bonus par filleul
                </span>
              </li>
            </ul>

            <a
              href="https://apps.apple.com/app/fripescan/id6738286206"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Commencer gratuitement
            </a>
          </div>

          {/* Plan Premium */}
          <div className="bg-gradient-to-br from-[#215B87] to-[#e18343] rounded-3xl p-8 hover:scale-105 transition-transform relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
              <span className="text-white font-bold text-sm">POPULAIRE</span>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-white">Premium</h2>
              <div className="text-5xl font-bold mb-4 text-white">
                4,99€
                <span className="text-xl text-white/80">/mois</span>
              </div>
              <p className="text-white/90">Pour les passionnés de fripe</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">
                  <strong>Scans illimités</strong> 🚀
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">
                  Analyse IA avancée avec plus de détails
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">
                  Estimation de prix plus précise
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">
                  Historique illimité
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">
                  Export PDF des estimations
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">
                  Support prioritaire
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">
                  Nouvelles fonctionnalités en avant-première
                </span>
              </li>
            </ul>

            <a
              href="https://apps.apple.com/app/fripescan/id6738286206"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-white text-[#215B87] rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Passer à Premium
            </a>
          </div>
        </div>

        {/* Section FAQ Pricing */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Puis-je annuler mon abonnement Premium à tout moment ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Oui, vous pouvez annuler votre abonnement à tout moment depuis les paramètres de l'application. Aucun engagement, aucune question posée.
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Comment fonctionne le programme de parrainage ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Partagez votre code de parrainage avec vos amis. Lorsqu'ils s'inscrivent avec votre code, vous recevez tous les deux 5 scans bonus gratuits. Les scans bonus n'expirent jamais !
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Les scans gratuits se renouvellent quand ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vos 3 scans gratuits se renouvellent automatiquement chaque semaine. La semaine commence le lundi à 00h00.
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Quelle est la précision des estimations ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Notre IA est entraînée sur des milliers de vêtements de seconde main et analyse les prix du marché en temps réel. Les estimations sont indicatives et basées sur l'état, la marque et la demande actuelle.
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Mes données sont-elles sécurisées ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolument. Nous utilisons un chiffrement de bout en bout et sommes conformes au RGPD. Vos photos ne sont utilisées que pour l'analyse et ne sont jamais partagées avec des tiers. Consultez notre <a href="/legal/privacy" className="text-[#215B87] hover:text-[#e18343] underline">politique de confidentialité</a>.
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Y a-t-il une période d'essai Premium ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous proposons régulièrement des périodes d'essai gratuites. Téléchargez l'application pour voir les offres en cours. Vous pouvez également utiliser le programme de parrainage pour obtenir des scans bonus gratuits.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#215B87] to-[#e18343] rounded-3xl p-12 mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Prêt à scanner vos fripes ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Téléchargez FripeScan gratuitement et découvrez la valeur de vos vêtements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/fripescan/id6738286206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#215B87] rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.fripescan.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#215B87] rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">FripeScan</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Scannez et évaluez vos vêtements de seconde main grâce à l'intelligence artificielle.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Légal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/legal/terms" className="text-gray-600 dark:text-gray-400 hover:text-[#215B87] dark:hover:text-[#e18343] transition-colors">
                      Conditions d'utilisation
                    </a>
                  </li>
                  <li>
                    <a href="/legal/privacy" className="text-gray-600 dark:text-gray-400 hover:text-[#215B87] dark:hover:text-[#e18343] transition-colors">
                      Politique de confidentialité
                    </a>
                  </li>
                  <li>
                    <a href="/legal/mentions" className="text-gray-600 dark:text-gray-400 hover:text-[#215B87] dark:hover:text-[#e18343] transition-colors">
                      Mentions légales
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <a href="mailto:contact@fripescan.fr" className="hover:text-[#215B87] dark:hover:text-[#e18343] transition-colors">
                      contact@fripescan.fr
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@fripescan.fr" className="hover:text-[#215B87] dark:hover:text-[#e18343] transition-colors">
                      support@fripescan.fr
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center text-gray-500 dark:text-gray-500 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm">&copy; 2024 FripeScan. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
