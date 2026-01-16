const faqs = [
  {
    id: 1,
    question: "Comment fonctionne FripeScan ?",
    answer:
      "Prenez simplement une photo de votre vêtement avec votre smartphone. Notre intelligence artificielle analyse instantanément la marque, l'état, le style et vous fournit une estimation de prix basée sur les données du marché de la seconde main. Le tout en moins de 5 secondes !",
  },
  {
    id: 2,
    question: 'Combien coûte l\'application ?',
    answer:
      'FripeScan est gratuit avec 3 scans par semaine. Pour des scans illimités et des fonctionnalités avancées, passez à Premium pour seulement 4,99€/mois ou 49,99€/an (soit 2 mois offerts). Vous pouvez annuler à tout moment.',
  },
  {
    id: 3,
    question: 'Les estimations de prix sont-elles fiables ?',
    answer:
      'Oui ! Notre IA analyse des millions de transactions réelles sur les plateformes de seconde main (Vinted, Leboncoin, Vestiaire Collective...). Nous atteignons 87% de précision et nos algorithmes s\'améliorent continuellement grâce aux données de nos 800+ utilisateurs actifs.',
  },
  {
    id: 4,
    question: 'Sur quelles plateformes puis-je publier mes annonces ?',
    answer:
      "FripeScan vous permet de publier rapidement vos annonces sur Vinted, Leboncoin, Vestiaire Collective et d'autres plateformes majeures. L'app pré-remplit automatiquement les informations détectées (marque, taille, état) pour vous faire gagner un temps précieux.",
  },
  {
    id: 5,
    question: "Quelles marques l'IA peut-elle reconnaître ?",
    answer:
      'Notre IA reconnaît plus de 500 marques, des plus populaires (Zara, H&M, Nike) aux marques de luxe (Chanel, Hermès, Louis Vuitton) et aux labels vintage rares. Si une marque n\'est pas reconnue, vous pouvez l\'ajouter manuellement et notre IA apprendra pour les prochaines fois.',
  },
  {
    id: 6,
    question: 'Puis-je utiliser FripeScan sans connexion internet ?',
    answer:
      "Oui ! Le mode hors ligne vous permet de scanner vos vêtements même sans connexion. Les résultats seront synchronisés automatiquement dès que vous serez de nouveau connecté. Parfait pour chiner en friperie ou dans des vide-greniers.",
  },
  {
    id: 7,
    question: 'Comment fonctionne le programme de parrainage ?',
    answer:
      "Invitez vos amis et gagnez 5 scans bonus pour chaque ami qui télécharge l'app avec votre code. Votre ami reçoit également 5 scans bonus ! C'est illimité : plus vous parrainez, plus vous scannez gratuitement.",
  },
  {
    id: 8,
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      "Absolument. Vos photos et données sont chiffrées et stockées de manière sécurisée. Nous sommes conformes au RGPD et ne partageons jamais vos informations personnelles avec des tiers. Vous pouvez supprimer votre compte et toutes vos données à tout moment.",
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Questions fréquentes</h2>
        <dl className="mt-20 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
