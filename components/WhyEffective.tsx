const WhyEffective = () => {
  const reasons = [
    {
      number: "01",
      title: "データドリブンなアプローチ",
      description: "過去の成功事例データを基に、業界・企業規模・課題感に応じた最適なアプローチ手法を選択します。感覚に頼らない、データに裏付けられた営業活動を実践しています。"
    },
    {
      number: "02", 
      title: "質の高いターゲティング",
      description: "AIを活用した企業分析により、お客様のサービスに最も適した見込み顧客を特定。無駄なアプローチを削減し、成約確度の高い企業にのみアプローチします。"
    },
    {
      number: "03",
      title: "継続的な改善サイクル",
      description: "週次でのレポート分析と改善提案により、常に最新の市場動向に対応。PDCAサイクルを高速で回すことで、継続的に成果を向上させています。"
    },
    {
      number: "04",
      title: "経験豊富な営業チーム",
      description: "各業界のエキスパートが在籍し、専門知識を活かしたアプローチを実施。お客様の業界に精通したメンバーが、説得力のある提案を行います。"
    }
  ]

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            なぜ、カリトルくんは
            <span className="text-primary-red">商談</span>
            を獲得できるのか？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            単なる営業代行ではない、成果にコミットする理由
          </p>
        </div>

        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* テキストコンテンツ */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-red text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    {reason.number}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* イラスト部分 */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-light-red to-white rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-8xl">
                    {index === 0 && '📊'}
                    {index === 1 && '🎯'}
                    {index === 2 && '🔄'}
                    {index === 3 && '👥'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-red to-accent-red rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            これらの要素が組み合わさることで
          </h3>
          <p className="text-xl mb-6">
            業界トップクラスの<strong>91%</strong>という高い成約率を実現しています
          </p>
          <a href="#contact" className="bg-white text-primary-red hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-block">
            今すぐ無料相談する
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyEffective 