'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-200">
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-3 py-1 rounded-lg font-semibold transition-all ${
          locale === 'fr'
            ? 'bg-gradient-to-r from-[#2558A5] to-[#E1AC42] text-white'
            : 'text-gray-600 hover:text-[#2558A5]'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-lg font-semibold transition-all ${
          locale === 'en'
            ? 'bg-gradient-to-r from-[#2558A5] to-[#E1AC42] text-white'
            : 'text-gray-600 hover:text-[#2558A5]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
