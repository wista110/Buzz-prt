const ServiceScope = () => {
  const services = [
    {
      icon: "📧",
      title: "メールアプローチ",
      description: "ターゲット企業への効果的なメール営業を代行します"
    },
    {
      icon: "📞",
      title: "電話アプローチ",
      description: "コールセンターによる質の高いテレアポを実施します"
    },
    {
      icon: "📱",
      title: "SNSアプローチ",
      description: "LinkedInやTwitterを活用した現代的なアプローチ"
    },
    {
      icon: "🎯",
      title: "リスト作成",
      description: "最適なターゲットリストの作成から管理まで"
    },
    {
      icon: "📊",
      title: "効果測定・分析",
      description: "詳細なレポートで成果を見える化します"
    },
    {
      icon: "🔄",
      title: "継続的改善",
      description: "データに基づく継続的なアプローチ改善を実施"
    }
  ]

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            幅広い対応範囲
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            営業活動のあらゆる場面をトータルサポート
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group hover:bg-light-red p-6 rounded-2xl transition-all duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-light-red rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-dark-gray mb-4">
              お客様のご要望に合わせてカスタマイズ可能
            </h3>
            <p className="text-gray-600 mb-6">
              業界や商材に応じて、最適なアプローチ手法を組み合わせてご提案いたします
            </p>
            <a href="#contact" className="btn-primary inline-block">
              詳細を相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceScope 