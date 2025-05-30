import { useState } from 'react'

const UseCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const useCases = [
    {
      company: "IT企業A社",
      industry: "SaaS業界",
      challenge: "新規顧客開拓が思うように進まず、売上目標達成が困難な状況でした。",
      solution: "ターゲット企業の選定から、効果的なアプローチメッセージの作成まで、包括的にサポート。",
      result: "月間アポ数が3倍に増加し、6ヶ月で売上が150%向上しました。",
      testimonial: "カリトルくんのおかげで、営業チームがコア業務に集中できるようになりました。"
    },
    {
      company: "製造業B社",
      industry: "製造業界",
      challenge: "従来の営業手法では新しい市場への参入が困難で、営業効率が悪い状況でした。",
      solution: "業界特化のアプローチ手法で、製造業のニーズに合わせたメッセージを作成。",
      result: "新市場での商談数が5倍に増加し、新規事業の立ち上げに成功しました。",
      testimonial: "専門知識を活かしたアプローチで、想像以上の成果を得ることができました。"
    },
    {
      company: "コンサル企業C社",
      industry: "コンサルティング業界",
      challenge: "高単価サービスのため、質の高いリードの獲得が課題でした。",
      solution: "企業規模や課題感に応じた精密なターゲティングと、価値提案の明確化を実施。",
      result: "成約率が80%向上し、平均受注単価も120%アップしました。",
      testimonial: "質の高いリードのおかげで、提案の成功率が格段に向上しました。"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length)
  }

  return (
    <section className="bg-light-gray section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            活用事例
          </h2>
          <p className="text-xl text-gray-600">
            実際にカリトルくんをご利用いただいたお客様の成功事例
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-custom p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左側：会社情報とチャレンジ */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <div className="inline-block bg-primary-red text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {useCases[currentSlide].industry}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-4">
                    {useCases[currentSlide].company}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-red mb-2">課題</h4>
                    <p className="text-gray-600">{useCases[currentSlide].challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary-red mb-2">ソリューション</h4>
                    <p className="text-gray-600">{useCases[currentSlide].solution}</p>
                  </div>
                </div>
              </div>

              {/* 右側：結果と声 */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-red mb-2">結果</h4>
                  <p className="text-gray-600">{useCases[currentSlide].result}</p>
                </div>

                <div className="bg-light-red p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-dark-gray mb-3">お客様の声</h4>
                  <p className="text-gray-700 italic">
                    "{useCases[currentSlide].testimonial}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-50 text-primary-red border-2 border-primary-red rounded-full w-12 h-12 flex items-center justify-center transition-colors"
              aria-label="前の事例"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 text-primary-red border-2 border-primary-red rounded-full w-12 h-12 flex items-center justify-center transition-colors"
              aria-label="次の事例"
            >
              →
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-4 space-x-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary-red' : 'bg-gray-300'
                }`}
                aria-label={`事例 ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases 