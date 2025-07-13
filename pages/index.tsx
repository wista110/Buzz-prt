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
        <title>Buzz Partners - ”あの会社”へ、今日から一緒に。</title>
        <meta 
          name="description" 
          content="話題の『あの会社』へ、今日から一緒に。企画・撮影から編集まで一貫したSNS運用代行サービス。TikTok・Instagram・YouTube運用で圧倒的な実績を誇るBuzz Partnersにお任せください。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="buzzpartners,バズパートナーズ,ばずぱーとなーず,SNS運用代行 全国対応,TikTok運用代行,Instagram運用代行,YouTube運用代行,SNS集客,コンテンツ制作,動画編集,SNS運用,SNSマーケティング,オンライン SNS代行,企業SNS運用,buzzpartners 評判,バズる,SNS運用のプロフェッショナル,SNSコンサルティング,東京 大阪 名古屋 愛知 福岡 長野 沖縄 SNS運用,全国 SNS代行" />
        <meta property="og:title" content="Buzzpartners｜SNS運用代行・TikTok・Instagram集客専門" />
        <meta property="og:description" content="話題の『あの会社』へ、今日から一緒に。企画・撮影から編集まで一貫したSNS運用代行サービス。TikTok・Instagram・YouTube運用で圧倒的な実績を誇るBuzz Partnersにお任せください。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.buzzpartners.jp/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="5m_s-TgUtpzrhwu2MwsHCC1pHQUY_g8q0UeFYwTFRu8" />
        
        
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
              "name": "Buzzpartners",
              "description": "全国対応のSNS運用代行・TikTok・Instagram・YouTube集客専門サービス。オンラインで全国どこでもサポート",
              "url": "https://www.buzzpartners.jp/",
              "telephone": "03-6454-0000",
              "email": "info@buzzpartners.jp",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP",
                "addressRegion": "東京都",
                "addressLocality": "渋谷区"
              },
              "serviceType": "SNS運用代行,TikTok運用代行,Instagram運用代行,YouTube運用代行,SNS集客,コンテンツ制作",
              "areaServed": ["日本", "東京都", "大阪府", "愛知県", "福岡県", "北海道", "宮城県", "広島県", "沖縄県"],
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