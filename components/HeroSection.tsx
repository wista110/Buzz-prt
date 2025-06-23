import { useLoading } from '../contexts/LoadingContext'

const HeroSection = () => {
  const { isLoading } = useLoading()

  return (
    <section 
      className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-cover bg-center bg-no-repeat min-h-screen lg:min-h-[calc(100vh-80px)]"
      style={{
        backgroundImage: 'url(/bg-shabon.png)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 items-center h-full lg:min-h-[calc(100vh-200px)]">
          {/* 左側: テキストコンテンツ */}
          <div className="space-y-8 gap-2 lg:space-y-12">
            {/* メインタイトル */}
            <div className="space-y-4 p-2 lg:space-y-6">
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-black text-[40px] lg:text-[48px] xl:text-[56px] leading-none select-none text-left font-montserrat font-bold italic">
                    話題の
                </p>
                <div className={`
                      glitch-container mx-auto
                      ${!isLoading ? 'animation-delay-[2s]' : ''}
                   `}>
                  <div className="glitch-hero glitch--5">
                    {'"あの会社"へ'.split('').map((char, i) => (
                      <span key={i} data-char={char}>
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-black text-[40px] lg:text-[48px] xl:text-[56px] leading-none select-none text-right font-montserrat font-bold italic">
                  今日から一緒に
                </p>
              </div>
              <p className="text-xl lg:text-2xl xl:text-3xl text-black leading-relaxed lg:leading-relaxed xl:leading-relaxed">
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
            <div className="w-full flex justify-center py-4 lg:py-12">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md lg:max-w-none">
                <a href="#contact" className="btn-primary text-center flex-1 sm:flex-initial sm:min-w-[240px] lg:min-w-[300px] lg:text-lg lg:py-4">
                  無料相談する
                </a>
              </div>
            </div>
          </div>

          {/* 右側: イラスト */}
          <div className="relative lg:py-8 p-2">
            {/* メイン画像 */}
            <div className="bg-shadow relative z-20">
              <img 
                src="/buzzpartners.png" 
                alt="SNS運用・コンテンツ制作"
                className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 