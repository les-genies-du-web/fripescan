const stats = [
  { id: 1, name: 'Temps gagné par annonce', value: '5 min' },
  { id: 2, name: 'Ventes plus rapides', value: '+40%' },
  { id: 3, name: 'Précision des estimations', value: '87%' },
  { id: 4, name: 'Revenus supplémentaires/mois', value: '+150€' },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Des résultats concrets pour votre business
            </h2>
            <p className="mt-4 text-lg/8 text-gray-600">Nos utilisateurs vendent plus vite et gagnent plus grâce à des prix optimisés</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
