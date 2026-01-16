const navigation = {
  application: [
    { name: 'Fonctionnalités', href: '#fonctionnalites' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'Télécharger', href: '#downloads' },
    { name: 'FAQ', href: '#faq' },
  ],
  ressources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Guide d\'estimation', href: '/blog/comment-estimer-prix-vetements-seconde-main' },
    { name: 'Marques vintage', href: '/blog/top-10-marques-vintage-recherchees' },
  ],
  entreprise: [
    { name: 'À propos', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Support', href: 'mailto:support@fripescan.fr' },
  ],
  legal: [
    { name: 'CGU', href: '/legal/terms' },
    { name: 'CGV', href: '/legal/cgv' },
    { name: 'Confidentialité', href: '/legal/privacy' },
    { name: 'Mentions légales', href: '/legal/mentions' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://instagram.com/fripescan',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: 'https://x.com/fripescan',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@fripescan',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
    },
  ],
}

export default function Example() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/dwxgvbcwe/image/upload/v1765577735/Gemini_Generated_Image_p98ia4p98ia4p98i_1_-removebg-preview_wk0aqm.png" 
                alt="FripeScan Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            <p className="text-sm/6 text-balance text-gray-600">
              Scannez et estimez vos vêtements de seconde main en quelques secondes grâce à l'intelligence artificielle.
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-[#2558A5] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900 mb-2 relative inline-block">
                  Application
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#2558A5] to-[#E1AC42]"></span>
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.application.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-[#2558A5] transition-all duration-300 hover:translate-x-2 inline-block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900 mb-2 relative inline-block">
                  Ressources
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#2558A5] to-[#E1AC42]"></span>
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.ressources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-[#2558A5] transition-all duration-300 hover:translate-x-2 inline-block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900 mb-2 relative inline-block">
                  Entreprise
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#2558A5] to-[#E1AC42]"></span>
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.entreprise.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-[#2558A5] transition-all duration-300 hover:translate-x-2 inline-block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900 mb-2 relative inline-block">
                  Légal
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#2558A5] to-[#E1AC42]"></span>
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-[#2558A5] transition-all duration-300 hover:translate-x-2 inline-block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24">
          <p className="mt-8 text-xs/5 text-gray-600 md:order-1 md:mt-0 text-center animate-fade-in">
            © 2025 FripeScan. Tous droits réservés. Made with <span className="inline-block animate-pulse text-red-500">❤️</span> in France
          </p>
        </div>
      </div>
    </footer>
  )
}
