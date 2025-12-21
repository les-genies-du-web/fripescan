export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-20 pt-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[#215B87] to-[#e18343] mb-8 shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            FripeScan
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Scannez vos vêtements de seconde main et découvrez leur valeur grâce à l'IA
          </p>
        </header>

        <section className="max-w-5xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-3xl p-10 hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Scannez</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Prenez une photo de votre vêtement en quelques secondes
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-3xl p-10 hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Analysez</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                L'IA identifie la marque, le style et l'état du vêtement
              </p>
            </div>

            <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-3xl p-10 hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Évaluez</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Obtenez une estimation de prix basée sur le marché
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Téléchargez l'application
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Disponible sur iOS et Android
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#215B87] to-[#e18343] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#215B87] to-[#e18343] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </section>

        <footer className="text-center text-gray-500 dark:text-gray-500 pt-12 pb-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-lg">&copy; 2024 FripeScan. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
}
