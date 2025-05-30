const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-light-red to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-gray leading-tight">
                カレンダー、
                <span className="text-primary-red">埋めて</span>
                もいいですか？
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                商談創出に特化した営業代行サービス「カリトルくん」で、
                <br />
                あなたのカレンダーを商談で埋めつくします。
              </p>
            </div>

            {/* 実績数値 */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-red mb-2">91%</div>
                <div className="text-gray-600">アポイント獲得率</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-red mb-2">300</div>
                <div className="text-gray-600">社以上の実績</div>
              </div>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                無料相談する
              </a>
              <a href="#features" className="btn-secondary text-center">
                サービス詳細を見る
              </a>
            </div>
          </div>

          {/* 右側: イラスト */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-custom p-8 text-center">
              {/* プレースホルダーイラスト */}
              <div className="w-full h-80 bg-gradient-to-br from-accent-red to-primary-red rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-6xl">📅</div>
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">
                商談で埋まるカレンダー
              </h3>
              <p className="text-gray-600">
                効率的な営業代行で、質の高い商談をお届けします
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 