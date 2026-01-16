import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Scan intelligent',
    description: 'Prenez une photo de votre vêtement et notre IA l\'analyse instantanément.',
  },
  { name: 'Estimation de prix', description: 'Obtenez une estimation précise basée sur les prix du marché actuels.' },
  {
    name: 'Reconnaissance de marques',
    description: 'Notre IA reconnaît des centaines de marques et styles différents.',
  },
  { name: 'Historique des scans', description: 'Consultez tous vos scans précédents et suivez l\'évolution des prix.' },
  { name: 'Publication rapide', description: 'Publiez directement vos annonces sur les plateformes de seconde main.' },
  { name: 'Programme de parrainage', description: 'Gagnez des scans bonus en invitant vos amis.' },
  { name: 'Mode hors ligne', description: 'Scannez même sans connexion internet.' },
  { name: 'Application mobile', description: 'Disponible sur iOS et Android pour scanner partout.' },
]

export default function Example() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-semibold text-indigo-400">Toutes les fonctionnalités</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              L'assistant IA pour vos fripes
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Scannez, estimez et publiez vos vêtements en quelques secondes avec notre intelligence artificielle.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-indigo-400" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
