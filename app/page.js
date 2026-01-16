import Header from "./components/Header"
import Footer from "./components/Footer"
import AppCTA from "./components/AppCTA"
import FAQ from "./components/FAQ"
import Stats from "./components/Stats"
import Fonctionnalites from "./components/Fonctionnalites"
import Tarifs from "./components/Tarifs"
import Reassurance from "./components/Reassurance"

export default function Example() {
  return (
    <>
    <Header />
    <div className="bg-gradient-to-b from-white to-gray-50 pt-32">
      <div className="relative isolate overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2558A5]/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-[#E1AC42]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex animate-fade-in">
              <div className="relative flex items-center gap-x-4 rounded-full bg-gradient-to-r from-[#2558A5]/10 to-[#E1AC42]/10 px-4 py-1 text-sm/6 border border-[#2558A5]/20 hover:border-[#2558A5]/40 hover:scale-105 transition-all duration-300">
                <span className="font-semibold text-[#2558A5]">Version</span>
                <span aria-hidden="true" className="h-4 w-px bg-[#2558A5]/30" />
                <span className="flex items-center gap-x-1 text-gray-700 font-medium">1.0</span>
              </div>
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-slide-up">
              Vendez vos fripes <span className="bg-gradient-to-r from-[#2558A5] to-[#E1AC42] bg-clip-text text-transparent animate-pulse">40% plus vite</span> ✨
            </h1>
            <p className="mt-4 text-lg text-gray-700 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Scannez, estimez le juste prix et publiez vos vêtements en 30 secondes. Gagnez jusqu'à <span className="font-bold text-[#E1AC42]">150€/mois</span> en optimisant vos prix. Rejoignez <span className="font-bold text-[#2558A5]">800+ vendeurs</span> qui cartonnent sur Vinted !
            </p>
            <div className="mt-8 flex items-center gap-x-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <a
                href="#downloads"
                className="relative rounded-full bg-gradient-to-r from-[#2558A5] to-[#1e4785] px-6 py-3.5 text-sm font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Commencer gratuitement - 3 scans offerts</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#E1AC42] to-[#d99b2e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a href="#fonctionnalites" className="text-sm font-semibold text-gray-900 hover:text-[#2558A5] transition-all duration-300 group flex items-center gap-2">
                Voir comment ça marche 
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:scale-110 transition-transform duration-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 animate-bounce" style={{animationDelay: '0s'}}>✓</span>
                <span className="font-medium">Sans carte bancaire</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:scale-110 transition-transform duration-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 animate-bounce" style={{animationDelay: '0.1s'}}>✓</span>
                <span className="font-medium">3 scans/semaine gratuits</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:scale-110 transition-transform duration-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 animate-bounce" style={{animationDelay: '0.2s'}}>✓</span>
                <span className="font-medium">Annulation à tout moment</span>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-0 lg:shrink-0 lg:grow animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="mx-auto w-full max-w-sm relative group">
              {/* Floating particles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#E1AC42]/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2558A5]/20 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2558A5] to-[#E1AC42] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Image */}
              <img 
                src="https://res.cloudinary.com/dwxgvbcwe/image/upload/v1766516393/WhatsApp_Image_2025-12-22_at_23.44.50_qsz7n7.jpg" 
                alt="FripeScan App Screenshot"
                className="relative rounded-3xl shadow-2xl ring-1 ring-gray-200 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
              />
              
              {/* Sparkle effect */}
              <div className="absolute top-10 right-10 text-2xl animate-ping">✨</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="downloads"><AppCTA /></div>
    <Stats />
    <div id="fonctionnalites"><Fonctionnalites /></div> 
    <div id="tarifs"><Tarifs /></div>
    <Reassurance />
    <div id="faq"><FAQ /></div>
    <Footer />
   
    </>
  )
}
