export default function Home() {
  return (
    <>
    
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            
              <img src="https://res.cloudinary.com/dwxgvbcwe/image/upload/v1765577735/Gemini_Generated_Image_p98ia4p98ia4p98i_1_-removebg-preview_wk0aqm.png" alt="" className="w-24" />
            
          </div>
          <a 
            href="/pricing" 
            className="px-6 py-2 bg-gradient-to-r from-[#215B87] to-[#e18343] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Tarifs
          </a>
        </nav>

        <header className="text-center mb-20 pt-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[#215B87] to-[#e18343] mb-8 shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-gray-900">
            FripeScan
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Scannez vos vêtements de seconde main et découvrez leur valeur grâce à l'IA
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#215B87]">10K+</div>
              <div className="text-gray-600">Scans réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#215B87]">5K+</div>
              <div className="text-gray-600">Utilisateurs actifs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#215B87]">4.8★</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
          </div>
        </header>

        <section className="max-w-5xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F5F7] rounded-3xl p-10 hover:scale-105 transition-transform shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Scannez</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Prenez une photo de votre vêtement en quelques secondes
              </p>
            </div>

            <div className="bg-[#F5F5F7] rounded-3xl p-10 hover:scale-105 transition-transform shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Analysez</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                L'IA identifie la marque, le style et l'état du vêtement
              </p>
            </div>

            <div className="bg-[#F5F5F7] rounded-3xl p-10 hover:scale-105 transition-transform shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Évaluez</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Obtenez une estimation de prix basée sur le marché
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            L'application en images
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-[9/19] bg-gradient-to-br from-[#215B87] to-[#e18343] rounded-[3rem] p-4 shadow-2xl mb-4 mx-auto max-w-xs">
                <div className="bg-white rounded-[2.5rem] h-full flex flex-col items-center justify-center p-6">
                  <svg className="w-20 h-20 text-[#215B87] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">Scannez vos vêtements</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scanner intelligent</h3>
              <p className="text-gray-600">Prenez une photo et obtenez une analyse instantanée</p>
            </div>

            <div className="text-center">
              <div className="aspect-[9/19] bg-gradient-to-br from-[#215B87] to-[#e18343] rounded-[3rem] p-4 shadow-2xl mb-4 mx-auto max-w-xs">
                <div className="bg-white rounded-[2.5rem] h-full flex flex-col items-center justify-center p-6">
                  <svg className="w-20 h-20 text-[#215B87] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <p className="text-gray-600 text-sm">Résultats détaillés</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analyse complète</h3>
              <p className="text-gray-600">Marque, état, estimation de prix et conseils</p>
            </div>

            <div className="text-center">
              <div className="aspect-[9/19] bg-gradient-to-br from-[#215B87] to-[#e18343] rounded-[3rem] p-4 shadow-2xl mb-4 mx-auto max-w-xs">
                <div className="bg-white rounded-[2.5rem] h-full flex flex-col items-center justify-center p-6">
                  <svg className="w-20 h-20 text-[#215B87] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">Historique de vos scans</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suivi facile</h3>
              <p className="text-gray-600">Retrouvez tous vos scans et statistiques</p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Ce que disent nos utilisateurs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F5F7] rounded-3xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-3">
                  <div className="font-bold text-gray-900">Marie L.</div>
                  <div className="text-sm text-gray-600">Vendeuse Vinted</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#e18343]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                "Super app ! J'estime mes fripes en quelques secondes avant de les mettre en vente. Gain de temps énorme !"
              </p>
            </div>

            <div className="bg-[#F5F5F7] rounded-3xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <div className="ml-3">
                  <div className="font-bold text-gray-900">Thomas B.</div>
                  <div className="text-sm text-gray-600">Chineur vintage</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#e18343]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                "L'IA reconnaît même les marques rares ! Parfait pour dénicher les bonnes affaires en friperie."
              </p>
            </div>

            <div className="bg-[#F5F5F7] rounded-3xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#215B87] to-[#e18343] flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-3">
                  <div className="font-bold text-gray-900">Sophie D.</div>
                  <div className="text-sm text-gray-600">Passionnée mode</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#e18343]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                "Interface intuitive et résultats rapides. Le programme de parrainage est top, j'ai déjà gagné plein de scans !"
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            <details className="bg-[#F5F5F7] rounded-2xl p-6 group shadow-sm">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Comment fonctionne FripeScan ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                Prenez simplement une photo de votre vêtement avec l'application. Notre intelligence artificielle analyse la marque, le style, l'état et les prix du marché pour vous donner une estimation instantanée.
              </p>
            </details>

            <details className="bg-[#F5F5F7] rounded-2xl p-6 group shadow-sm">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                L'application est-elle gratuite ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                Oui ! Vous bénéficiez de 3 scans gratuits par semaine. Pour des scans illimités et des fonctionnalités avancées, passez à Premium pour seulement 4,99€/mois.
              </p>
            </details>

            <details className="bg-[#F5F5F7] rounded-2xl p-6 group shadow-sm">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Quels types de vêtements puis-je scanner ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                Tous types de vêtements : t-shirts, jeans, robes, vestes, chaussures, accessoires... Notre IA reconnaît des milliers de marques et styles différents.
              </p>
            </details>

            <details className="bg-[#F5F5F7] rounded-2xl p-6 group shadow-sm">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Comment obtenir des scans bonus ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                Parrainez vos amis ! Chaque fois qu'un ami s'inscrit avec votre code, vous recevez tous les deux 5 scans bonus gratuits. Les scans bonus n'expirent jamais.
              </p>
            </details>

            <details className="bg-[#F5F5F7] rounded-2xl p-6 group shadow-sm">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Les estimations sont-elles fiables ?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                Notre IA est entraînée sur des milliers de vêtements et analyse les prix du marché en temps réel. Les estimations sont indicatives et vous aident à fixer un prix juste pour vos articles.
              </p>
            </details>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Téléchargez l'application
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Disponible sur iOS et Android
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://apps.apple.com/app/fripescan/id6738286206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#215B87] to-[#e18343] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.fripescan.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#215B87] to-[#e18343] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </section>

        <footer className="pt-12 pb-8 border-t border-gray-200">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">FripeScan</h3>
                <p className="text-gray-600 text-sm">
                  Scannez et évaluez vos vêtements de seconde main grâce à l'intelligence artificielle.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Légal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/legal/terms" className="text-gray-600 hover:text-[#215B87] transition-colors">
                      Conditions d'utilisation
                    </a>
                  </li>
                  <li>
                    <a href="/legal/privacy" className="text-gray-600 hover:text-[#215B87] transition-colors">
                      Politique de confidentialité
                    </a>
                  </li>
                  <li>
                    <a href="/legal/mentions" className="text-gray-600 hover:text-[#215B87] transition-colors">
                      Mentions légales
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="mailto:contact@fripescan.fr" className="hover:text-[#215B87] transition-colors">
                      contact@fripescan.fr
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@fripescan.fr" className="hover:text-[#215B87] transition-colors">
                      support@fripescan.fr
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center text-gray-500 pt-8 border-t border-gray-200">
              <p className="text-sm">&copy; 2024 FripeScan. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>

    </>
  );
}
