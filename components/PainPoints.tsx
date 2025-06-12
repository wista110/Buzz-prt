import React, { useState, useEffect, useRef } from 'react'

const PainPoints = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // 悩みテキスト画像の配列
  const worryTextImages = [
    'worries_text_1.png',
    'worries_text_2.png',
    'worries_text_3.png',
    'worries_text_4.png',
    'worries_text_5.png',
    'worries_text_6.png'
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
      ref={sectionRef}
      className="bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 py-16 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-red-600">こんなお悩み、</span>
            <br/>
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              ありませんか？
            </span>
          </h2>
          <p className={`text-xl text-gray-600 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            多くの企業様が抱えるSNS運用の課題
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
        </div>

        {/* PCレイアウト: 中央のイラストを囲む配置 */}
        <div className="hidden xl:block">
          <div className="relative w-full h-[700px] max-w-6xl mx-auto">
            {/* 中央のイラスト */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={`${isVisible ? 'animate-float-in-delay-3' : 'opacity-0'}`}>
                <img 
                  src="/worries_image.png"
                  alt="SNS運用で悩む人のイラスト"
                  className="w-96 h-auto animate-float-gentle"
                  style={{
                    filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.15))'
                  }}
                />
              </div>
            </div>

            {/* 悩みテキストを円形配置 */}
            {worryTextImages.map((imageSrc, index) => {
              // 配置位置を手動で指定（より確実な方法）
              const positions = [
                { top: '10%', left: '50%', transform: 'translate(-50%, -50%)' },    // 上
                { top: '34%', right: '16%', transform: 'translate(50%, -50%)' },   // 右上
                { top: '64%', right: '0%', transform: 'translate(50%, -50%)' },   // 右下
                { bottom: '10%', left: '50%', transform: 'translate(-50%, 50%)' }, // 下
                { top: '72%', left: '18%', transform: 'translate(-50%, -50%)' },   // 左下
                { top: '26%', left: '2%', transform: 'translate(-50%, -50%)' }    // 左上
              ]
              
              return (
                <div 
                  key={index}
                  className={`absolute ${
                    isVisible 
                      ? `animate-float-in-delay-${index + 1}` 
                      : 'opacity-0'
                  }`}
                  style={positions[index]}
                >
                  <img 
                    src={`/${imageSrc}`}
                    alt={`SNS運用の悩み ${index + 1}`}
                    className="w-96 h-auto hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                    style={{
                      filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* タブレット・モバイルレイアウト: 通常のグリッド配置 */}
        <div className="xl:hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* 左側: 悩みテキスト（モバイル: 全幅、タブレット: 2列） */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto lg:mx-0">
                {worryTextImages.map((imageSrc, index) => (
                  <div 
                    key={index}
                    className={`flex justify-center ${
                      isVisible 
                        ? `animate-float-in-delay-${index + 1}` 
                        : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={`/${imageSrc}`}
                      alt={`SNS運用の悩み ${index + 1}`}
                      className="w-full h-auto max-w-sm hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                      style={{
                        filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 右側: イラスト画像（タブレットのみ表示） */}
            <div className="hidden md:block lg:col-span-1 xl:hidden">
              <div className={`text-center ${isVisible ? 'animate-float-in-delay-3' : 'opacity-0'}`}>
                <img 
                  src="/worries_image.png"
                  alt="SNS運用で悩む人のイラスト"
                  className="w-full h-auto max-w-md mx-auto animate-float-gentle"
                  style={{
                    filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.15))'
                  }}
                />
              </div>
            </div>
          </div>

          {/* モバイル専用: イラスト画像（小さめ表示） */}
          <div className="md:hidden mt-12">
            <div className={`text-center ${isVisible ? 'animate-float-in-delay-6' : 'opacity-0'}`}>
              <img 
                src="/worries_image.png"
                alt="SNS運用で悩む人のイラスト"
                className="w-full h-auto max-w-xs mx-auto animate-float-gentle"
                style={{
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
                }}
              />
            </div>
          </div>
        </div>

        {/* 解決への誘導 */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <span className="text-xl md:text-2xl font-bold">
              そんなお悩みを「Buzz Partners」が解決します！
            </span>
          </div>
          
          {/* 矢印アニメーション */}
          <div className="mt-8">
            <div className="animate-bounce">
              <svg className="w-8 h-8 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PainPoints 