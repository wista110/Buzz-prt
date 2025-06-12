import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MarqueeTags from '../components/MarqueeTags'
import AchievementBadges from '../components/AchievementBadges'
import UseCases from '../components/UseCases'
import PainPoints from '../components/PainPoints'
import Strengths from '../components/Strengths'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  // サンプルタグ配列
  const popularTags = [
    '#love',
    '#instagood',
    '#AI',
    '#photooftheday',
    '#fashion',
    '#beautiful',
    '#happy',
    '#cute',
    '#tbt',
    '#art',
    '#followme',
    '#picoftheday',
    '#nature',
    '#like4like',
    '#cat',
    '#travel',
    '#fitness',
    '#foodporn',
    '#instadaily',
    '#beauty',
    '#selfie',
    '#summer'
  ];

  return (
    <>
      <Head>
        <title>Buzz Partners - 成果にこだわったSNS運用をサポートします</title>
        <meta 
          name="description" 
          content="Buzz Partners"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="SNS代行,AI活用,動画編集,SNS運用,SNSマーケティング,マーケティング,マーケティング代行,マーケティングアウトソーシング" />
        <meta property="og:title" content="Buzz Partners - 圧倒的な実績でサポートします" />
        <meta property="og:description" content="あの会社、あのお店、あのサービス、を一緒に育てます" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Buzz-prt.com" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* ファビコン設定（複数サイズ対応） */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
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
              "name": "Buzz Partners",
              "description": "SNS運用代行サービス",
              "url": "https://Buzz-prt.com",
              "telephone": "03-1234-5678",
              "email": "contact@Buzz-prt.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP",
                "addressRegion": "東京都",
                "addressLocality": "渋谷区"
              },
              "serviceType": "SNS運用代行サービス",
              "areaServed": "日本",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SNS運用代行プラン",
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
        <section id="hero">
          <HeroSection />
        </section>
        <section id="achievements">
        <MarqueeTags tags={popularTags} />
        <AchievementBadges />
        </section>
        <section id="use-cases">
          <UseCases />
        </section>
        <section id="pain-points">
          <PainPoints />
        </section>
        <section id="strengths">
          <Strengths />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <Footer />
      </main>
    </>
  )
} 