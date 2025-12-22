export const metadata = {
  title: "Comment estimer le prix de vos vêtements de seconde main ? | FripeScan",
  description: "Guide complet pour évaluer correctement vos fripes et maximiser vos ventes sur Vinted, Leboncoin. Critères, astuces et outils d'estimation.",
  keywords: "estimer prix fripe, vêtements seconde main, vinted prix, estimation vêtements occasion, prix fripe",
};

export default function ArticleEstimationPrix() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="flex justify-between items-center mb-12">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">FripeScan</span>
          </a>
          <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-[#215B87] dark:hover:text-[#e18343] transition-colors">
            ← Retour au blog
          </a>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <span className="px-3 py-1 bg-[#215B87]/10 text-[#215B87] dark:bg-[#e18343]/10 dark:text-[#e18343] rounded-full text-sm font-semibold">
              Guide
            </span>
            <span className="ml-3 text-gray-500 dark:text-gray-400">15 décembre 2024 · 5 min de lecture</span>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Comment estimer le prix de vos vêtements de seconde main ?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Vous avez des vêtements à vendre sur Vinted, Leboncoin ou Vestiaire Collective ? Découvrez comment fixer le bon prix pour vendre rapidement tout en maximisant vos gains.
          </p>

          <div className="aspect-video bg-gradient-to-br from-[#215B87] to-[#e18343] rounded-3xl flex items-center justify-center mb-12">
            <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Les 5 critères essentiels pour estimer un vêtement</h2>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">1. La marque</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            C'est le critère n°1. Une pièce Zara ne se vendra pas au même prix qu'une pièce Sézane ou Isabel Marant. Les marques premium et de luxe conservent mieux leur valeur. Recherchez les ventes récentes de la même marque pour avoir une idée du marché.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">2. L'état du vêtement</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Soyez honnête sur l'état :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6">
            <li><strong>Neuf avec étiquette</strong> : 70-80% du prix neuf</li>
            <li><strong>Excellent état</strong> : 50-60% du prix neuf</li>
            <li><strong>Bon état</strong> : 30-40% du prix neuf</li>
            <li><strong>État correct</strong> : 15-25% du prix neuf</li>
          </ul>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">3. La rareté et la saisonnalité</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Une pièce vintage rare ou une édition limitée peut se vendre plus cher. Attention aussi à la saison : vendez vos manteaux en automne et vos maillots de bain au printemps pour maximiser vos chances.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">4. La demande actuelle</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Certains styles sont plus recherchés que d'autres. Les jeans vintage, les blazers oversize et les pièces Y2K sont très demandés en 2024. Consultez les tendances sur les réseaux sociaux pour ajuster vos prix.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">5. La concurrence</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Avant de fixer votre prix, regardez les annonces similaires sur Vinted et Leboncoin. Si 10 personnes vendent le même jean à 25€, ne le mettez pas à 40€.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">La méthode de calcul rapide</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Voici une formule simple pour estimer rapidement :
          </p>
          <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-900 dark:text-white font-bold text-lg mb-2">
              Prix de vente = (Prix neuf × Coefficient état × Coefficient marque) - Décote
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Exemple : Jean Levi's 501 acheté 100€, excellent état<br/>
              = (100€ × 0.6 × 0.8) - 10€ = 38€
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Les erreurs à éviter</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6">
            <li><strong>Surestimer la valeur sentimentale</strong> : Ce n'est pas parce que vous l'adorez que les acheteurs paieront plus cher</li>
            <li><strong>Ignorer les frais de port</strong> : Sur Vinted, les frais sont à la charge de l'acheteur, mais sur Leboncoin, pensez-y</li>
            <li><strong>Ne pas négocier</strong> : Laissez une marge de 10-15% pour la négociation</li>
            <li><strong>Fixer un prix trop bas</strong> : Vous perdez de l'argent et les acheteurs peuvent se méfier</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Utilisez la technologie à votre avantage</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Avec FripeScan, vous pouvez scanner vos vêtements et obtenir une estimation instantanée basée sur l'IA. L'application analyse la marque, l'état et les prix du marché pour vous donner une fourchette de prix réaliste en quelques secondes.
          </p>

          <div className="bg-gradient-to-r from-[#215B87] to-[#e18343] rounded-3xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Estimez vos vêtements en 3 secondes
            </h3>
            <p className="text-white/90 mb-6">
              Téléchargez FripeScan et scannez vos fripes pour connaître leur valeur instantanément
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/app/fripescan/id6738286206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#215B87] rounded-xl font-bold hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.fripescan.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#215B87] rounded-xl font-bold hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Conclusion</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Estimer correctement vos vêtements de seconde main est un art qui s'apprend avec l'expérience. En suivant ces conseils et en utilisant des outils comme FripeScan, vous maximiserez vos ventes tout en proposant des prix justes à vos acheteurs.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            N'oubliez pas : un vêtement bien estimé se vend plus vite et génère moins de négociations. Prenez le temps de bien évaluer vos pièces, et les résultats suivront !
          </p>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <a href="/blog" className="text-[#215B87] dark:text-[#e18343] hover:underline font-semibold">
            ← Retour au blog
          </a>
        </div>
      </div>
    </div>
  );
}
