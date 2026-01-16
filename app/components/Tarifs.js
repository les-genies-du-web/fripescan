import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Mensuel', priceSuffix: '/mois' },
  { value: 'annually', label: 'Annuel', priceSuffix: '/an' },
]
const tiers = [
  {
    name: 'Gratuit',
    id: 'tier-gratuit',
    href: 'https://apps.apple.com/app/fripescan/id6738286206',
    price: { monthly: '0€', annually: '0€' },
    description: 'Idéal pour tester et vendre occasionnellement',
    features: [
      '3 scans par semaine',
      'Analyse IA des vêtements', 
      'Estimation de prix basée sur le marché',
      'Historique des 30 derniers scans',
      'Programme de parrainage (5 scans bonus/ami)'
    ],
    featured: false,
    cta: 'Commencer gratuitement',
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: 'https://apps.apple.com/app/fripescan/id6738286206',
    price: { monthly: '4,99€', annually: '49,99€' },
    description: 'Pour les vendeurs sérieux qui veulent maximiser leurs revenus',
    badge: 'Économisez 10€/an',
    features: [
      'Scans illimités - vendez sans limite',
      'Analyse IA avancée avec détection des défauts',
      'Estimations ultra-précises (+15% de précision)',
      'Historique illimité avec statistiques de vente',
      'Export PDF professionnel pour vos annonces',
      'Publication automatique multi-plateformes',
      'Support prioritaire (réponse en 2h)',
      'Accès anticipé aux nouvelles fonctionnalités'
    ],
    featured: true,
    cta: 'Essayer Premium 7 jours gratuits',
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2558A5]/10 to-[#E1AC42]/10 px-4 py-2 mb-4">
            <span className="text-sm font-bold text-[#2558A5]">💰 Tarifs Simples</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Investissez <span className="bg-gradient-to-r from-[#2558A5] to-[#E1AC42] bg-clip-text text-transparent">4,99€</span>, gagnez <span className="text-[#E1AC42]">150€/mois</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Commencez gratuitement. Passez Premium quand vous êtes prêt. <span className="font-semibold text-green-600">Garantie 30 jours</span>
          </p>
        </div>
        <div className="isolate mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              data-featured={tier.featured ? 'true' : undefined}
              className="group/tier relative rounded-2xl bg-white border-2 border-gray-200 p-6 data-featured:border-[#2558A5] data-featured:shadow-xl data-featured:scale-105 hover:shadow-lg transition-all duration-300 xl:p-8"
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#2558A5] to-[#E1AC42] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    ⭐ POPULAIRE
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3
                  id={`tier-${tier.id}`}
                  className="text-2xl font-bold text-gray-900 group-data-featured/tier:text-[#2558A5]"
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">{typeof tier.price === 'string' ? tier.price : tier.price.monthly}</span>
                {typeof tier.price !== 'string' && (
                  <span className="text-lg font-semibold text-gray-500">/mois</span>
                )}
              </div>

              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full rounded-full bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 text-center text-sm font-bold text-white group-data-featured/tier:from-[#2558A5] group-data-featured/tier:to-[#1e4785] hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {tier.cta}
              </a>
              <ul role="list" className="mt-6 space-y-2.5 text-sm text-gray-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-start">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(tier.featured ? 'text-[#2558A5]' : 'text-green-500', 'h-5 w-5 flex-none mt-0.5')}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
