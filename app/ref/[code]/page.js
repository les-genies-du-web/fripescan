'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function ReferralPage() {
  const params = useParams();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const referralCode = params.code;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = `fripescan://ref/${referralCode}`;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [referralCode]);

  const handleDownload = (platform) => {
    if (platform === 'ios') {
      window.location.href = 'https://apps.apple.com/app/fripescan';
    } else if (platform === 'android') {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.fripescan';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-[#F5F5F7] dark:bg-zinc-800 rounded-3xl shadow-xl p-10 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[#215B87] to-[#e18343] mb-8 shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Bienvenue sur FripeScan !
          </h1>

          <div className="bg-gradient-to-r from-[#215B87] to-[#e18343] rounded-2xl p-6 mb-6 shadow-lg">
            <p className="text-white font-semibold mb-2 text-lg">Code de parrainage</p>
            <p className="text-5xl font-bold text-white tracking-wider">{referralCode}</p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
            Vous avez été invité à rejoindre FripeScan ! Téléchargez l'application et utilisez ce code pour obtenir <span className="font-bold text-[#215B87]">5 scans gratuits</span>.
          </p>

          {countdown > 0 ? (
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Ouverture de l'application dans {countdown}s...
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#215B87] to-[#e18343] h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((5 - countdown) / 5) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Si l'application ne s'ouvre pas automatiquement, téléchargez-la ci-dessous.
            </p>
          )}

          <div className="space-y-4">
            <button
              onClick={() => handleDownload('ios')}
              className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#215B87] to-[#e18343] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </button>

            <button
              onClick={() => handleDownload('android')}
              className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#215B87] to-[#e18343] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-xl">Comment ça marche ?</h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-left">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#215B87] to-[#e18343] text-white text-sm font-bold mr-3 flex-shrink-0">1</span>
                <p className="pt-1">Téléchargez l'application FripeScan</p>
              </div>
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#215B87] to-[#e18343] text-white text-sm font-bold mr-3 flex-shrink-0">2</span>
                <p className="pt-1">Créez votre compte</p>
              </div>
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#215B87] to-[#e18343] text-white text-sm font-bold mr-3 flex-shrink-0">3</span>
                <p className="pt-1">Entrez le code <span className="font-bold">{referralCode}</span> lors de l'inscription</p>
              </div>
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#215B87] to-[#e18343] text-white text-sm font-bold mr-3 flex-shrink-0">4</span>
                <p className="pt-1">Profitez de vos 5 scans gratuits !</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
