import React, { useState, useEffect, useRef } from 'react'

const Strengths = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // 強みテキスト画像の配列
  const strengthsImages = [
    'strengthstext1.png',
    'strengthstext2.png',
    'strengthstext3.png',
    'strengthstext4.png',
    'strengthstext5.png',
    'strengthstext6.png'
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

  return (
    <section 
      id="strengths" 
      ref={sectionRef}
      className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-main bg-clip-text text-transparent">
              Buzz Partners
            </span>
            <span className="text-gray-700">の強み</span>
          </h2>
          <p className={`text-xl text-gray-600 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            なぜ多くの企業様に選ばれ、継続してご利用いただいているのか
          </p>
          <div className={`w-24 h-1 bg-gradient-main mx-auto rounded-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
        </div>

        {/* モバイルレイアウト: 1列 */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            {strengthsImages.map((imageSrc, index) => (
              <div 
                key={index}
                className={`flex justify-center ${
                  isVisible 
                    ? `animate-fade-in-up` 
                    : 'opacity-0'
                }`}
              >
                <img 
                  src={`/${imageSrc}`}
                  alt={`Buzz Partnersの強み ${index + 1}`}
                  className="w-full h-auto max-w-sm hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                  style={{
                    filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* タブレット・PCレイアウト: 2列×3行（左列1,2,3 右列4,5,6） */}
        <div className="hidden md:block">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              
              {/* 左列: 画像1,2,3 */}
              <div className="space-y-16">
                {strengthsImages.slice(0, 3).map((imageSrc, index) => (
                  <div 
                    key={index}
                    className={`flex justify-center ${
                      isVisible 
                        ? `animate-fade-in-left-delay-1` // 左からフェードイン
                        : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={`/${imageSrc}`}
                      alt={`Buzz Partnersの強み ${index + 1}`}
                      className="w-full h-auto max-w-md hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                      style={{
                        filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.15))'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* 右列: 画像4,5,6 */}
              <div className="space-y-16">
                {strengthsImages.slice(3, 6).map((imageSrc, index) => (
                  <div 
                    key={index + 3}
                    className={`flex justify-center ${
                      isVisible 
                        ? `animate-fade-in-right-delay-1` // 右からフェードイン
                        : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={`/${imageSrc}`}
                      alt={`Buzz Partnersの強み ${index + 4}`}
                      className="w-full h-auto max-w-md hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                      style={{
                        filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.15))'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 追加情報セクション */}
        {/* <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-main bg-clip-text text-transparent mb-6">
              だからこそ、お客様に選ばれ続けています
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gradient-main text-white rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-extrabold mb-2">150+</div>
                <div className="text-lg font-medium opacity-90">支援実績</div>
              </div>
              <div className="bg-gradient-reverse text-white rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-extrabold mb-2">35万+</div>
                <div className="text-lg font-medium opacity-90">フォロワー数</div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-extrabold mb-2">100%</div>
                <div className="text-lg font-medium opacity-90">内製化率</div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                実績と信頼に裏打ちされたノウハウで、<br className="hidden md:block" />
                あなたのビジネスを次のレベルへ導きます
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Strengths 