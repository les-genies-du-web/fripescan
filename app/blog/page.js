import Header from "../components/Header"
import Footer from "../components/Footer"

export default function BlogPage() {
  const articles = [
    {
      slug: 'comment-estimer-prix-vetements-seconde-main',
      title: 'Comment estimer le prix de vos vêtements de seconde main ?',
      excerpt: 'Découvrez les critères essentiels pour évaluer correctement vos fripes et maximiser vos ventes sur Vinted, Leboncoin et autres plateformes.',
      category: 'Guide',
      date: '15 décembre 2024',
      readTime: '5 min',
      image: '/blog/estimation-prix.jpg'
    },
    {
      slug: 'top-10-marques-vintage-recherchees',
      title: 'Top 10 des marques vintage les plus recherchées en 2024',
      excerpt: 'Quelles sont les marques de seconde main qui se vendent le mieux ? Notre analyse du marché de la fripe et du vintage.',
      category: 'Tendances',
      date: '10 décembre 2024',
      readTime: '7 min',
      image: '/blog/marques-vintage.jpg'
    },
    {
      slug: 'ia-mode-revolution-seconde-main',
      title: "L'IA révolutionne le marché de la seconde main",
      excerpt: "Comment l'intelligence artificielle transforme l'achat et la vente de vêtements d'occasion. Focus sur les nouvelles technologies.",
      category: 'Innovation',
      date: '5 décembre 2024',
      readTime: '6 min',
      image: '/blog/ia-mode.jpg'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">

        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Blog FripeScan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guides, conseils et actualités sur la seconde main, le vintage et l'IA appliquée à la mode
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-lg transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-[#2558A5] to-[#E1AC42] flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#2558A5]/10 text-[#2558A5] dark:bg-[#E1AC42]/10 dark:text-[#E1AC42] rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#2558A5] transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {article.date}
                  </span>
                  <span className="text-[#2558A5] dark:text-[#E1AC42] font-semibold group-hover:translate-x-1 transition-transform">
                    Lire →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#2558A5] to-[#E1AC42] rounded-3xl p-12 mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Essayez FripeScan gratuitement
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Scannez vos vêtements et découvrez leur valeur en quelques secondes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/fripescan/id6738286206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2558A5] rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.fripescan.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2558A5] rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
