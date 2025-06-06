const HeroSection = () => {
  return (
    <section 
      className="pt-24 pb-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/bg-shabon.png)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="space-y-8">
            {/* メインタイトル */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <p className="text-black text-[40px] leading-none select-none text-left font-montserrat font-bold italic">
                    「もっと、
                </p>
                <img
                   src="/hero-copy3.png"
                   alt="惹きつける"
                   className="
                      inline-block
                      w-[240px]
                      h-[60px]
                      mx-auto
                      animate-shake
                      animation-delay-2s
                   "
                />
                <p className="text-black text-[40px] leading-none select-none text-right font-montserrat font-bold italic">
                  コンテンツへ」
                </p>
              </div>
              <p className=" text-xl text-black leading-relaxed">
                  企画、撮影から編集まですべて
                  <br/>
                <span className="text-highlight font-bold">
                  Buzz Partners
                </span>
                  へお任せください。
              </p>
            </div>

            {/* 実績数値 */}
            {/* <div className="grid grid-cols-2 gap-8">
              <div className="card-outline text-center">
                <div className="text-4xl font-bold text-primary-red mb-2">91%</div>
                <div className="text-gray-600">アポイント獲得率</div>
              </div>
              <div className="card-outline text-center">
                <div className="text-4xl font-bold text-primary-red mb-2">300</div>
                <div className="text-gray-600">社以上の実績</div>
              </div>
              <div className="card-outline text-center">
                <div className="text-4xl font-bold text-primary-red mb-2">300</div>
                <div className="text-gray-600">社以上の実績</div>
              </div>
            </div> */}

            {/* CTAボタン */}
            <div className="w-full flex justify-center py-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md lg:max-w-none">
                <a href="#contact" className="btn-primary text-center flex-1 sm:flex-initial sm:min-w-[160px]">
                  無料相談する
                </a>
              </div>
            </div>
          </div>

          {/* 右側: イラスト */}
          <div className="relative">
            {/* 影の背景 */}
            {/* <div className="bg-shadow"> */}
              {/* バブルの背景 */}
              {/* <div className="bg-bubbles"> */}
                {/* メイン画像 */}
                <div className="bg-shadow relative z-20">
                  <img 
                    src="/hero-image.png" 
                    alt="SNS運用・コンテンツ制作"
                    className="w-full h-auto"
                  />
                </div>
              {/* </div> */}
            
            
            {/* フローティングカード */}
            {/* <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-xl shadow-custom p-6">
              <h3 className="text-xl font-bold text-dark-gray mb-2">
                <span className="bg-gradient-main bg-clip-text text-transparent">
                  成果にコミット
                </span>
              </h3>
              <p className="text-gray-600 text-sm">
                データ分析に基づいた戦略的SNS運用
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 