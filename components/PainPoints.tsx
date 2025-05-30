const PainPoints = () => {
  const painPoints = [
    {
      title: "営業リソースが足りない",
      description: "社内の営業チームだけでは、十分なアポイント数を確保できない",
      icon: "😰"
    },
    {
      title: "質の高い商談が獲得できない",
      description: "数は確保できても、成約に繋がる質の高い商談が不足している",
      icon: "😓"
    },
    {
      title: "営業プロセスが非効率",
      description: "アポイント獲得から商談まで、一連のプロセスに時間がかかりすぎる",
      icon: "😩"
    }
  ]

  return (
    <section className="bg-light-red py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">
            こんなお悩み、ありませんか？
          </h2>
          <p className="text-xl text-gray-600">
            多くの企業様が抱える営業活動の課題
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-custom">
              <div className="text-6xl mb-6">{point.icon}</div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-primary-red text-white px-8 py-4 rounded-2xl">
            <span className="text-xl font-bold">
              そんなお悩みを「カリトルくん」が解決します！
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PainPoints 