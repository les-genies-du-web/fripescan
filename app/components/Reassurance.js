import { ShieldCheckIcon, ClockIcon, CreditCardIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Sécurité & RGPD',
    description: 'Vos données sont chiffrées et protégées. Conformité RGPD garantie.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Garantie 30 jours',
    description: 'Satisfait ou remboursé sans condition. Annulation en 1 clic.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Sans engagement',
    description: 'Aucune carte bancaire requise pour commencer. Résiliez quand vous voulez.',
    icon: CreditCardIcon,
  },
  {
    name: 'Support réactif',
    description: 'Réponse en moins de 24h (2h pour les Premium). Équipe française.',
    icon: ClockIcon,
  },
]

export default function Reassurance() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">Pourquoi nous faire confiance ?</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Votre satisfaction est notre priorité
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Rejoignez des centaines de vendeurs qui nous font confiance pour optimiser leurs ventes de fripes
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
        {/* Badges de confiance */}
        <div className="mt-16 border-t border-white/10 pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
              <div className="col-span-1 flex justify-center items-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">800+</p>
                  <p className="text-sm text-gray-600 mt-1">Utilisateurs actifs</p>
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">4.8/5</p>
                  <p className="text-sm text-gray-600 mt-1">Note moyenne</p>
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">2,500+</p>
                  <p className="text-sm text-gray-600 mt-1">Scans réalisés</p>
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">🇫🇷</p>
                  <p className="text-sm text-gray-600 mt-1">Made in France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
