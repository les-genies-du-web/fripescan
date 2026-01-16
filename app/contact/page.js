import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2558A5]/10 to-[#E1AC42]/10 px-4 py-2 mb-4">
              <span className="text-sm font-bold text-[#2558A5]">💬 Contactez-nous</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Une question ? <span className="bg-gradient-to-r from-[#2558A5] to-[#E1AC42] bg-clip-text text-transparent">On est là !</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions sur FripeScan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            
            {/* Formulaire de contact */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 animate-slide-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2558A5] focus:ring-2 focus:ring-[#2558A5]/20 transition-all outline-none"
                      placeholder="Jean"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2558A5] focus:ring-2 focus:ring-[#2558A5]/20 transition-all outline-none"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2558A5] focus:ring-2 focus:ring-[#2558A5]/20 transition-all outline-none"
                    placeholder="jean.dupont@exemple.fr"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2558A5] focus:ring-2 focus:ring-[#2558A5]/20 transition-all outline-none"
                  >
                    <option>Question générale</option>
                    <option>Support technique</option>
                    <option>Abonnement Premium</option>
                    <option>Partenariat</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2558A5] focus:ring-2 focus:ring-[#2558A5]/20 transition-all outline-none resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2558A5] to-[#1e4785] text-white font-bold py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              
              {/* Cartes de contact */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#2558A5] to-[#E1AC42] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">Pour toute question générale</p>
                    <a href="mailto:contact@fripescan.fr" className="text-[#2558A5] font-semibold hover:text-[#E1AC42] transition-colors">
                      contact@fripescan.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#2558A5] to-[#E1AC42] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Support technique</h3>
                    <p className="text-gray-600 mb-2">Besoin d'aide avec l'application ?</p>
                    <a href="mailto:support@fripescan.fr" className="text-[#2558A5] font-semibold hover:text-[#E1AC42] transition-colors">
                      support@fripescan.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#2558A5] to-[#E1AC42] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Confidentialité</h3>
                    <p className="text-gray-600 mb-2">Questions sur vos données</p>
                    <a href="mailto:privacy@fripescan.fr" className="text-[#2558A5] font-semibold hover:text-[#E1AC42] transition-colors">
                      privacy@fripescan.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-gradient-to-r from-[#2558A5] to-[#E1AC42] rounded-3xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                <p className="mb-6 text-white/90">Restez connecté avec nous sur les réseaux sociaux</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/fripescan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="https://x.com/fripescan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@fripescan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* FAQ rapide */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">⏱️ Quel est le délai de réponse ?</h3>
                <p className="text-gray-600">Nous répondons généralement sous 24h en semaine. Les utilisateurs Premium bénéficient d'une réponse prioritaire en 2h.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">💳 Comment gérer mon abonnement ?</h3>
                <p className="text-gray-600">Vous pouvez gérer votre abonnement directement depuis les paramètres de l'application ou nous contacter à support@fripescan.fr</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🔒 Mes données sont-elles sécurisées ?</h3>
                <p className="text-gray-600">Oui, nous utilisons un chiffrement de bout en bout et sommes conformes au RGPD. Consultez notre politique de confidentialité.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📱 L'app est-elle disponible sur Android ?</h3>
                <p className="text-gray-600">Oui ! FripeScan est disponible sur iOS et Android. Téléchargez-la gratuitement depuis l'App Store ou Google Play.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
