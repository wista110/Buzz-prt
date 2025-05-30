const Strengths = () => {
  const strengths = [
    {
      icon: "💪",
      title: "豊富な実績と経験",
      description: "300社以上の営業代行実績を持つプロフェッショナルチームが、お客様のビジネスに最適化されたアプローチを提供します。"
    },
    {
      icon: "🎯",
      title: "高い成約率",
      description: "独自のスクリーニング手法により、91%という業界トップクラスの成約率を実現。質の高い商談だけをお届けします。"
    },
    {
      icon: "⚡",
      title: "スピード感のある対応",
      description: "最短1週間でアポイント獲得を開始。迅速な立ち上げと継続的な改善で、お客様の成果創出をサポートします。"
    }
  ]

  return (
    <section id="strengths" className="bg-light-gray section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            <span className="text-primary-red">カリトルくん</span>の強み
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            なぜ多くの企業様に選ばれ、継続してご利用いただいているのか
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-custom hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{strength.icon}</div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4">
                  {strength.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-custom max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-gray mb-6">
              だからこそ、お客様に選ばれ続けています
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-red mb-2">95%</div>
                <div className="text-gray-600">お客様満足度</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-red mb-2">85%</div>
                <div className="text-gray-600">継続利用率</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-red mb-2">24h</div>
                <div className="text-gray-600">平均返信時間</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strengths 