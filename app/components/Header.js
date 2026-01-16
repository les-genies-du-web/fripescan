'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Application', href: '/#fonctionnalites' },
  { name: 'Tarifs', href: '/#tarifs' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
        : 'bg-white border-b border-gray-200'
    }`}>
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center gap-2 group">
            <img 
              src="https://res.cloudinary.com/dwxgvbcwe/image/upload/v1765577735/Gemini_Generated_Image_p98ia4p98ia4p98i_1_-removebg-preview_wk0aqm.png" 
              alt="FripeScan Logo" 
              className="h-24 ml-24 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="relative text-base font-bold text-gray-900 hover:text-[#2558A5] transition-all duration-300 group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2558A5] to-[#E1AC42] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/#downloads"
            className="relative rounded-full bg-gradient-to-r from-[#2558A5] to-[#1e4785] px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">Télécharger</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#E1AC42] to-[#d99b2e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200 shadow-2xl animate-slide-in">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dwxgvbcwe/image/upload/v1765577735/Gemini_Generated_Image_p98ia4p98ia4p98i_1_-removebg-preview_wk0aqm.png" 
                alt="FripeScan Logo" 
                className="h-12 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-3 text-base/7 font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-[#2558A5]/10 hover:to-[#E1AC42]/10 hover:translate-x-2 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/#downloads"
                  className="-mx-3 block rounded-full px-6 py-3 text-center text-base/7 font-bold bg-gradient-to-r from-[#2558A5] to-[#1e4785] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Télécharger l'app
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
