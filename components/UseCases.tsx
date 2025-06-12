import React, { useState, useEffect, useRef } from 'react'

const UseCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const useCases = [
    {
      industry: "コインランドリー事業",
      period: "運用開始6か月",
      icon: "🏪",
      bgGradient: "from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/20",
      accentColor: "text-blue-600",
      results: [
        { label: "TikTok検索ランキング", value: "1位獲得", icon: "🥇" },
        { label: "LINE登録", value: "200人達成", icon: "📱" },
        { label: "Google SEO掲載", value: "9位→2位", icon: "📈" }
      ]
    },
    {
      industry: "不動産投資営業",
      period: "運用開始4か月",
      icon: "🏢",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      accentColor: "text-green-600",
      results: [
        { label: "月間平均再生数", value: "250%増", icon: "📹" },
        { label: "月間平均契約数", value: "3名→5名", icon: "📝" },
        { label: "TikTokでの売り上げ", value: "1200万", icon: "💰" }
      ]
    },
    {
      industry: "運送業",
      period: "利用継続中",
      icon: "🚛",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      accentColor: "text-orange-600",
      results: [
        { label: "月間再生数", value: "20万再生", icon: "👀" },
        { label: "求人のお問い合わせ", value: "1.5倍増", icon: "📞" },
        { label: "採用コスト", value: "50%削減", icon: "💸" }
      ]
    }
  ]

  // インtersection Observer でスクロール検出
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length)
  }

  const currentCase = useCases[currentSlide]

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-50 via-white to-primary-light/10 py-16 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-main bg-clip-text text-transparent">
              活用事例
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            実際にBuzz Partnersをご利用いただいたお客様の成功事例
          </p>
          <div className={`w-24 h-1 bg-gradient-main mx-auto rounded-full mt-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
        </div>

        {/* メインカード */}
        <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className={`bg-gradient-to-r ${currentCase.bgGradient} backdrop-blur-sm border-2 ${currentCase.borderColor} rounded-3xl shadow-2xl p-8 lg:p-12 transition-all duration-500`}>
            
            {/* ヘッダー */}
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{currentCase.icon}</div>
              <h3 className={`text-3xl md:text-4xl font-bold ${currentCase.accentColor} mb-2`}>
                {currentCase.industry}
              </h3>
              <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-md">
                <span className="text-gray-700 font-medium">{currentCase.period}</span>
              </div>
            </div>

            {/* 成果指標 */}
            <div className="grid md:grid-cols-3 gap-8">
              {currentCase.results.map((result, index) => (
                <div 
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {result.icon}
                  </div>
                  <div className="text-gray-600 text-sm font-medium mb-2">
                    {result.label}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold ${currentCase.accentColor} group-hover:animate-pulse-glow`}>
                    {result.value}
                  </div>
                </div>
              ))}
            </div>

            {/* 追加の装飾 */}
            <div className="absolute top-6 right-6 opacity-10">
              <div className={`w-32 h-32 bg-gradient-main rounded-full blur-2xl`}></div>
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <div className="flex justify-center mt-8 space-x-6">
            <button
              onClick={prevSlide}
              className="group bg-white hover:bg-gradient-main hover:text-white text-gray-700 border-2 border-gray-200 hover:border-transparent rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="前の事例"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="group bg-white hover:bg-gradient-main hover:text-white text-gray-700 border-2 border-gray-200 hover:border-transparent rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="次の事例"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-6 space-x-3">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 h-4 bg-gradient-main shadow-lg' 
                    : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`${useCase.industry}の事例`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default UseCases 