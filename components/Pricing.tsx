const Pricing = () => {
  const plans = [
    {
      name: "ライトプラン",
      price: "30万円",
      period: "月額",
      description: "小規模企業向けの基本プラン",
      features: [
        "月間10〜15件のアポイント",
        "メールアプローチ",
        "月次レポート",
        "基本的なターゲティング",
        "メールサポート"
      ],
      recommended: false
    },
    {
      name: "スタンダードプラン",
      price: "50万円",
      period: "月額",
      description: "最も人気の標準プラン",
      features: [
        "月間20〜30件のアポイント",
        "メール・電話アプローチ",
        "週次レポート",
        "高度なターゲティング",
        "専任担当者",
        "チャットサポート"
      ],
      recommended: true
    },
    {
      name: "プレミアムプラン",
      price: "80万円",
      period: "月額",
      description: "大企業向けの包括的プラン",
      features: [
        "月間40〜50件のアポイント",
        "全チャネルアプローチ",
        "リアルタイムレポート",
        "AI活用ターゲティング",
        "専任チーム",
        "24時間サポート",
        "カスタム施策"
      ],
      recommended: false
    }
  ]

  return (
    <section id="pricing" className="bg-light-gray section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            ご利用料金
          </h2>
          <p className="text-xl text-gray-600">
            お客様のニーズに合わせて選べる3つのプラン
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-custom p-8 ${
                plan.recommended ? 'ring-4 ring-primary-red transform scale-105' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-red text-white px-6 py-2 rounded-full text-sm font-bold">
                    最人気
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark-gray mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-red">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-primary-red mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a
                  href="#contact"
                  className={`w-full inline-block py-3 px-6 rounded-lg font-bold transition-colors ${
                    plan.recommended
                      ? 'bg-primary-red hover:bg-red-600 text-white'
                      : 'bg-white hover:bg-gray-50 text-primary-red border-2 border-primary-red'
                  }`}
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-custom max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-gray mb-6">
              料金に関するご注意
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-primary-red mb-2">初期費用</h4>
                <p className="text-gray-600">
                  すべてのプランで初期費用は無料です。月額料金のみでご利用いただけます。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-red mb-2">契約期間</h4>
                <p className="text-gray-600">
                  最低契約期間は3ヶ月となっております。効果を実感いただくための期間です。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-red mb-2">成果保証</h4>
                <p className="text-gray-600">
                  目標アポイント数の80%を下回った場合、翌月の料金を調整いたします。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-red mb-2">カスタマイズ</h4>
                <p className="text-gray-600">
                  お客様のニーズに応じて、プランのカスタマイズも可能です。お気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing 