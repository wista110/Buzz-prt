const Strengths = () => {
  return (
    <section id="strengths" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title-center text-4xl font-bold text-dark-gray mb-6">
            <span className="underline-gradient-responsive">Buzz Partnersの強み</span>
          </h2>
          {/* 強みイラスト - レスポンシブ対応 */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-5xl">
              <img 
                src="/strengths.png" 
                alt="Buzz Partnersの強み"
                className="w-full h-auto object-contain"
                style={{
                  width: 'clamp(300px, 85vw, 1100px)',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-light rounded-2xl p-8 shadow-custom max-w-4xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-dark-gray mb-6">
              だからこそ、お客様に選ばれ続けています
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/50 rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-2">150社+</div>
                <div className="text-gray-600 font-medium">支援実績</div>
              </div>
              <div className="bg-white/50 rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-2">35万人+</div>
                <div className="text-gray-600 font-medium">フォロワー数</div>
              </div>
              <div className="bg-white/50 rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600 font-medium">内製化率</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Strengths 