import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AchievementBadges from '../components/AchievementBadges'
import PainPoints from '../components/PainPoints'
import ServiceIntroduction from '../components/ServiceIntroduction'
import Strengths from '../components/Strengths'
import ServiceScope from '../components/ServiceScope'
import UseCases from '../components/UseCases'
import WhyEffective from '../components/WhyEffective'
import Pricing from '../components/Pricing'
import ProcessFlow from '../components/ProcessFlow'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>カリトルくん - 商談創出に特化した営業代行サービス</title>
        <meta 
          name="description" 
          content="商談創出に特化した営業代行サービス「カリトルくん」。月間30〜50件の質の高いアポイントメントで、お客様のカレンダーを商談で埋めつくします。91%の高い成約率と300社以上の実績。" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="営業代行,アポイント獲得,商談創出,テレアポ,営業アウトソーシング" />
        <meta property="og:title" content="カリトルくん - 商談創出に特化した営業代行サービス" />
        <meta property="og:description" content="91%の高い成約率で質の高いアポイントメントを提供。300社以上の実績を持つ営業代行サービス。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karitoru-kun.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        
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
        <PainPoints />
        <ServiceIntroduction />
        <Strengths />
        <ServiceScope />
        <UseCases />
        <WhyEffective />
        <Pricing />
        <ProcessFlow />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
} 