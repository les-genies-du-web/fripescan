export const metadata = {
  title: "Top 10 des marques vintage les plus recherchées en 2024 | FripeScan",
  description: "Découvrez les marques de seconde main qui se vendent le mieux en 2024. Analyse du marché de la fripe et du vintage avec prix moyens.",
  keywords: "marques vintage, fripe recherchée, marques seconde main, vintage 2024, marques prisées",
};

export default function ArticleMarquesVintage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="flex justify-between items-center mb-12">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2558A5] to-[#E1AC42] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">FripeScan</span>
          </a>
          <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-[#2558A5] dark:hover:text-[#E1AC42] transition-colors">
            ← Retour au blog
          </a>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <span className="px-3 py-1 bg-[#2558A5]/10 text-[#2558A5] dark:bg-[#E1AC42]/10 dark:text-[#E1AC42] rounded-full text-sm font-semibold">
              Tendances
            </span>
            <span className="ml-3 text-gray-500 dark:text-gray-400">10 décembre 2024 · 7 min de lecture</span>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Top 10 des marques vintage les plus recherchées en 2024
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Le marché de la seconde main explose en 2024. Certaines marques se démarquent et se vendent à prix d'or. Découvrez notre classement des marques les plus prisées par les chineurs et collectionneurs.
          </p>

          <div className="aspect-video bg-gradient-to-br from-[#2558A5] to-[#E1AC42] rounded-3xl flex items-center justify-center mb-12">
            <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Le classement 2024</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">1</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Carhartt</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                La marque workwear américaine est devenue l'icône du streetwear. Les vestes et pantalons vintage se vendent entre 60€ et 200€ selon l'état et la rareté.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Vestes Detroit, pantalons double knee, vestes Active
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">2</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Levi's</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Le roi du denim reste indétrônable. Les modèles vintage 501, 505 et 517 des années 70-90 sont très recherchés. Prix moyen : 40€ à 150€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> 501 vintage, vestes en jean Type 3, 505 big E
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">3</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The North Face</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Les doudounes Nuptse et les polaires vintage sont ultra-recherchées. Le retour du style outdoor fait exploser les prix : 80€ à 300€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Nuptse 700, polaires Denali, vestes Gore-Tex
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">4</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nike</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Les sweats vintage avec gros logo brodé et les vestes windbreaker 90s sont en forte demande. Fourchette de prix : 30€ à 120€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Sweats vintage brodés, vestes windbreaker, t-shirts sportswear
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">5</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Patagonia</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                La marque éco-responsable séduit de plus en plus. Les polaires et vestes techniques vintage se vendent entre 50€ et 180€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Polaires Synchilla, vestes Better Sweater, doudounes
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">6</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Champion</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Le comeback de Champion continue. Les sweats Reverse Weave vintage sont des pépites : 40€ à 100€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Sweats Reverse Weave, t-shirts universitaires, vestes
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">7</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Adidas</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Les survêtements vintage et les vestes à bandes sont très demandés. Prix moyen : 35€ à 110€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Survêtements Firebird, vestes vintage, t-shirts Trefoil
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">8</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ralph Lauren</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Le style preppy revient en force. Les polos, chemises et pulls vintage se vendent bien : 25€ à 90€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Polos vintage, chemises Oxford, pulls en laine
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">9</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dickies</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Le workwear abordable qui cartonne. Les pantalons 874 et vestes Eisenhower sont des valeurs sûres : 30€ à 70€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Pantalons 874, vestes Eisenhower, chemises de travail
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-[#2558A5] dark:text-[#E1AC42]">10</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tommy Hilfiger</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Le style Y2K fait son grand retour. Les pièces vintage des années 90-2000 sont très recherchées : 25€ à 80€.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pièces phares :</strong> Sweats à logo, vestes colorées, polos vintage
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Pourquoi ces marques ?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Plusieurs facteurs expliquent le succès de ces marques sur le marché de la seconde main :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li><strong>Qualité et durabilité</strong> : Ces marques ont fait leurs preuves dans le temps</li>
            <li><strong>Nostalgie</strong> : Le retour des styles 90s et Y2K booste la demande</li>
            <li><strong>Streetwear</strong> : L'influence de la culture urbaine et du hip-hop</li>
            <li><strong>Éco-responsabilité</strong> : Acheter vintage est plus durable</li>
            <li><strong>Prix accessibles</strong> : Contrairement au luxe, ces marques restent abordables</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Comment dénicher ces pépites ?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Voici nos meilleurs conseils pour trouver ces marques :
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li>Fouinez dans les friperies de quartier (moins de concurrence qu'en ligne)</li>
            <li>Surveillez Vinted et Leboncoin avec des alertes sur ces marques</li>
            <li>Allez aux vide-greniers tôt le matin</li>
            <li>Utilisez FripeScan pour identifier rapidement les bonnes affaires</li>
            <li>Rejoignez des groupes Facebook spécialisés dans le vintage</li>
          </ul>

          <div className="bg-gradient-to-r from-[#2558A5] to-[#E1AC42] rounded-3xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Identifiez les marques instantanément
            </h3>
            <p className="text-white/90 mb-6">
              Scannez vos trouvailles avec FripeScan pour savoir si vous tenez une pépite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/app/fripescan/id6738286206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2558A5] rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Télécharger FripeScan
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Conclusion</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Le marché du vintage est en pleine expansion et ces 10 marques dominent les ventes en 2024. Que vous soyez chineur, revendeur ou simple amateur de mode durable, connaître ces marques vous aidera à faire les bons choix.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            N'oubliez pas : l'état du vêtement reste primordial. Une pièce Carhartt en mauvais état vaudra moins qu'une pièce Dickies en excellent état. Utilisez des outils comme FripeScan pour estimer précisément vos trouvailles et ne pas passer à côté d'une bonne affaire !
          </p>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <a href="/blog" className="text-[#2558A5] dark:text-[#E1AC42] hover:underline font-semibold">
            ← Retour au blog
          </a>
        </div>
      </div>
    </div>
  );
}
