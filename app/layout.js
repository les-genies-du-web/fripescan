import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next" 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FripeScan - Scannez et évaluez vos vêtements de seconde main avec l'IA",
  description: "Découvrez la valeur de vos vêtements vintage et de seconde main en quelques secondes grâce à l'intelligence artificielle. Scannez, analysez et estimez le prix de vos fripes instantanément.",
  keywords: "fripe, seconde main, vintage, estimation vêtements, IA mode, vinted, scanner vêtements, prix fripe, vêtements occasion",
  authors: [{ name: "FripeScan" }],
  creator: "FripeScan",
  publisher: "FripeScan",
  metadataBase: new URL('https://fripescan.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fripescan.fr',
    title: "FripeScan - Scanner IA pour vêtements de seconde main",
    description: "Scannez vos vêtements vintage et découvrez leur valeur instantanément grâce à l'intelligence artificielle. Téléchargez l'app gratuite.",
    siteName: 'FripeScan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FripeScan - Scanner de vêtements IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FripeScan - Scanner IA pour vêtements de seconde main",
    description: "Scannez vos vêtements vintage et découvrez leur valeur instantanément grâce à l'IA.",
    images: ['/og-image.png'],
    creator: '@fripescan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
