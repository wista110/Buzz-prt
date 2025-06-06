import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AchievementBadges from '../components/AchievementBadges'
import UseCases from '../components/UseCases'
import PainPoints from '../components/PainPoints'
import ServiceIntroduction from '../components/ServiceIntroduction'
import Strengths from '../components/Strengths'
import Pricing from '../components/Pricing'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Buzz Partners - 成果にこだわったSNS運用をサポートします</title>
        <meta 
          name="description" 
          content="Buzz Partners"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="SNS代行,アポイント獲得,商談創出,テレアポ,営業アウトソーシング,マーケティング,マーケティング代行,マーケティングアウトソーシング" />
        <meta property="og:title" content="Buzz Partners - 成果にこだわったSNS運用をサポートします" />
        <meta property="og:description" content="あの会社、あのお店、あのサービス、を一緒に育てます" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karitoru-kun.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        
        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "カリトルくん",
              "description": "商談創出に特化した営業代行サービス",
              "url": "https://karitoru-kun.com",
              "telephone": "03-1234-5678",
              "email": "contact@karitoru-kun.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP",
                "addressRegion": "東京都",
                "addressLocality": "渋谷区"
              },
              "serviceType": "営業代行サービス",
              "areaServed": "日本",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "営業代行プラン",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "ライトプラン",
                    "price": "300000",
                    "priceCurrency": "JPY"
                  },
                  {
                    "@type": "Offer", 
                    "name": "スタンダードプラン",
                    "price": "500000",
                    "priceCurrency": "JPY"
                  },
                  {
                    "@type": "Offer",
                    "name": "プレミアムプラン", 
                    "price": "800000",
                    "priceCurrency": "JPY"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <AchievementBadges />
        <UseCases />
        <PainPoints />
        <ServiceIntroduction />
        <Strengths />
        <Pricing />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
} 