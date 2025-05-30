const ProcessFlow = () => {
  const steps = [
    {
      number: "01",
      title: "お問い合わせ・ヒアリング",
      description: "まずはお気軽にお問い合わせください。お客様のビジネス内容、課題、目標をじっくりとヒアリングさせていただきます。",
      duration: "1日",
      icon: "📞"
    },
    {
      number: "02",
      title: "戦略立案・提案",
      description: "ヒアリング内容を基に、最適なアプローチ戦略を立案。ターゲット設定から具体的な施策まで、詳細な提案書をご提示します。",
      duration: "3〜5日",
      icon: "📋"
    },
    {
      number: "03",
      title: "契約・セットアップ",
      description: "ご提案内容にご納得いただけましたら契約締結。専任チームの編成とツールセットアップを迅速に行います。",
      duration: "1〜2日",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "営業活動開始",
      description: "いよいよ営業活動を開始。定期的なレポートで進捗をお伝えし、必要に応じて戦略を調整していきます。",
      duration: "継続",
      icon: "🚀"
    }
  ]

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            サービス導入までの流れ
          </h2>
          <p className="text-xl text-gray-600">
            最短1週間でアポイント獲得を開始できます
          </p>
        </div>

        {/* デスクトップ版（横並び） */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* 接続線 */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* ステップ円 */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* カード */}
                  <div className="bg-white rounded-2xl shadow-custom p-6 pt-12 text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-dark-gray mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="inline-block bg-light-red text-primary-red px-3 py-1 rounded-full text-sm font-semibold">
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* モバイル版（縦並び） */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* 接続線（最後以外） */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-1 bg-gray-200"></div>
              )}
              
              <div className="flex space-x-6">
                {/* ステップ円 */}
                <div className="flex-shrink-0">
                  <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold z-10 relative">
                    {step.number}
                  </div>
                </div>
                
                {/* カード */}
                <div className="flex-1 bg-white rounded-2xl shadow-custom p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark-gray mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-block bg-light-red text-primary-red px-3 py-1 rounded-full text-sm font-semibold">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-light-red rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-gray mb-4">
              スピーディーな導入でいち早く成果を実感
            </h3>
            <p className="text-gray-600 mb-6">
              業界最短クラスの導入期間で、お客様の営業活動を即座にサポートします。
              <br />
              専任チームが責任を持って、成果が出るまで伴走いたします。
            </p>
            <a href="#contact" className="btn-primary inline-block">
              まずは無料相談から始める
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessFlow