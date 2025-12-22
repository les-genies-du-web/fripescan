export const metadata = {
  title: "L'IA révolutionne le marché de la seconde main | FripeScan",
  description: "Comment l'intelligence artificielle transforme l'achat et la vente de vêtements d'occasion. Technologies, applications et impact sur le marché de la fripe.",
  keywords: "IA mode, intelligence artificielle vêtements, technologie seconde main, innovation fripe, IA fashion",
};

export default function ArticleIAMode() {
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
              Innovation
            </span>
            <span className="ml-3 text-gray-500 dark:text-gray-400">5 décembre 2024 · 6 min de lecture</span>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            L'IA révolutionne le marché de la seconde main
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            L'intelligence artificielle transforme radicalement l'industrie de la mode d'occasion. De la reconnaissance d'image à l'estimation de prix, découvrez comment la technologie réinvente l'expérience de la fripe.
          </p>

          <div className="aspect-video bg-gradient-to-br from-[#215B87] to-[#e18343] rounded-3xl flex items-center justify-center mb-12">
            <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Le boom de la seconde main</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Le marché de la seconde main a explosé ces dernières années. En 2024, il représente plus de 200 milliards d'euros dans le monde et devrait doubler d'ici 2028. Cette croissance fulgurante s'accompagne de nouveaux défis : comment authentifier, évaluer et faciliter les transactions à grande échelle ?
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            C'est là que l'intelligence artificielle entre en jeu, apportant des solutions innovantes à ces problématiques.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Les applications concrètes de l'IA</h2>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">1. Reconnaissance automatique des marques</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Fini le temps où il fallait scruter chaque étiquette ! Les algorithmes de vision par ordinateur peuvent désormais identifier une marque en quelques secondes à partir d'une simple photo. Ces systèmes sont entraînés sur des millions d'images et reconnaissent :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6">
            <li>Les logos et signatures de marques</li>
            <li>Les coupes et styles caractéristiques</li>
            <li>Les détails de fabrication spécifiques</li>
            <li>Les étiquettes et codes produits</li>
          </ul>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">2. Estimation de prix intelligente</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            L'IA analyse des milliers de transactions en temps réel pour proposer une estimation de prix précise. Les algorithmes prennent en compte :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6">
            <li><strong>L'état du vêtement</strong> : détection automatique d'usure, taches, déchirures</li>
            <li><strong>La demande du marché</strong> : analyse des tendances et recherches</li>
            <li><strong>Les prix historiques</strong> : comparaison avec des ventes similaires</li>
            <li><strong>La saisonnalité</strong> : ajustement selon la période de l'année</li>
          </ul>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">3. Détection de contrefaçons</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Un problème majeur sur le marché de la seconde main. L'IA peut analyser des détails invisibles à l'œil nu pour authentifier un article :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6">
            <li>Analyse des coutures et finitions</li>
            <li>Vérification des matériaux</li>
            <li>Comparaison avec des modèles authentiques</li>
            <li>Détection d'anomalies dans les logos</li>
          </ul>

          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">4. Recommandations personnalisées</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Les algorithmes de machine learning analysent vos préférences pour vous suggérer des articles qui correspondent à votre style, votre taille et votre budget. Plus vous utilisez l'application, plus les recommandations deviennent pertinentes.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">L'impact sur les acteurs du marché</h2>

          <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6 mb-6">
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Pour les vendeurs</h4>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Gain de temps considérable dans l'estimation</li>
              <li>Prix optimisés pour vendre plus vite</li>
              <li>Moins d'erreurs d'identification</li>
              <li>Meilleure visibilité grâce au référencement automatique</li>
            </ul>
          </div>

          <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6 mb-6">
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Pour les acheteurs</h4>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Plus de confiance dans les achats</li>
              <li>Recherche facilitée et plus rapide</li>
              <li>Alertes sur les bonnes affaires</li>
              <li>Garantie d'authenticité renforcée</li>
            </ul>
          </div>

          <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6 mb-8">
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Pour les plateformes</h4>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Modération automatisée et plus efficace</li>
              <li>Réduction des litiges</li>
              <li>Meilleure expérience utilisateur</li>
              <li>Croissance du volume de transactions</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Les défis à relever</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Malgré ces avancées, l'IA dans la mode d'occasion fait face à plusieurs défis :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li><strong>La qualité des photos</strong> : L'IA a besoin d'images nettes pour être précise</li>
            <li><strong>La diversité des articles</strong> : Des millions de références à apprendre</li>
            <li><strong>L'évolution des tendances</strong> : Les algorithmes doivent s'adapter en temps réel</li>
            <li><strong>La protection des données</strong> : Respect de la vie privée des utilisateurs</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">L'avenir de l'IA dans la mode</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Les prochaines années verront l'émergence de nouvelles technologies :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li><strong>Essayage virtuel</strong> : Voir comment un vêtement vous va avant d'acheter</li>
            <li><strong>Analyse prédictive</strong> : Anticiper les tendances avant qu'elles n'explosent</li>
            <li><strong>Blockchain</strong> : Traçabilité complète des vêtements</li>
            <li><strong>IA conversationnelle</strong> : Assistants virtuels pour conseiller les acheteurs</li>
          </ul>

          <div className="bg-gradient-to-r from-[#215B87] to-[#e18343] rounded-3xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Essayez l'IA dès maintenant
            </h3>
            <p className="text-white/90 mb-6">
              FripeScan utilise l'intelligence artificielle pour vous aider à estimer vos vêtements en quelques secondes
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
            L'intelligence artificielle n'est plus une technologie futuriste, elle est déjà au cœur du marché de la seconde main. En facilitant l'authentification, l'estimation et la découverte de vêtements, l'IA rend la mode d'occasion plus accessible et plus fiable.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Cette révolution technologique s'inscrit parfaitement dans une démarche éco-responsable : en rendant la seconde main plus attractive, l'IA contribue à réduire l'impact environnemental de l'industrie textile.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Le futur de la mode est à la fois technologique et durable. Et vous, êtes-vous prêt à adopter ces nouvelles technologies pour vos achats et ventes de seconde main ?
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
