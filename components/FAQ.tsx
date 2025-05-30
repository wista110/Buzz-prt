import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "どのような業界・業種でも対応可能ですか？",
      answer: "はい、幅広い業界に対応しております。IT・SaaS、製造業、コンサルティング、人材、不動産など、これまで300社以上の実績があります。業界特有の課題やアプローチ方法についても、経験豊富な専任チームが対応いたします。"
    },
    {
      question: "最低契約期間はどのくらいですか？",
      answer: "最低契約期間は3ヶ月となっております。営業代行の効果を実感していただくために必要な期間として設定しております。3ヶ月以降は月単位での契約更新が可能です。"
    },
    {
      question: "どのようなターゲット企業にアプローチしますか？",
      answer: "お客様のサービス・商材に最適なターゲット企業を、企業規模、業界、地域、課題感などの観点から選定いたします。AIを活用した分析と、経験豊富なスタッフによる手動での精査を組み合わせ、質の高いターゲットリストを作成します。"
    },
    {
      question: "成果が出なかった場合の保証はありますか？",
      answer: "はい、成果保証制度をご用意しております。目標アポイント数の80%を下回った場合、翌月の料金を調整させていただきます。また、3ヶ月間で一定の成果が得られない場合は、戦略の見直しを無償で行います。"
    },
    {
      question: "どのような報告をしていただけますか？",
      answer: "プランに応じて週次または月次でレポートをお送りします。アプローチ数、反応率、アポイント獲得数、成約数などの定量データに加え、改善提案や次期戦略についても詳しくご報告いたします。"
    },
    {
      question: "既存の営業チームとの連携は可能ですか？",
      answer: "もちろん可能です。お客様の既存営業チームとの役割分担を明確化し、獲得したアポイントのスムーズな引き継ぎを行います。必要に応じて、営業チーム向けの商談ノウハウ共有なども実施いたします。"
    },
    {
      question: "途中でプラン変更は可能ですか？",
      answer: "はい、プラン変更は可能です。事業の成長に合わせて、より上位プランへのアップグレードや、カスタマイズプランへの変更もできます。変更は翌月から適用となります。"
    },
    {
      question: "個人情報の取り扱いについて教えてください。",
      answer: "個人情報保護法に準拠し、厳格な管理体制で個人情報を取り扱っております。プライバシーマーク取得企業として、お客様および対象企業の個人情報を適切に管理し、目的外使用は一切いたしません。"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-light-gray section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600">
            お客様からよくいただくご質問にお答えします
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-custom overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-dark-gray pr-4">
                  {faq.question}
                </h3>
                <div className={`text-primary-red text-2xl transform transition-transform ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </div>
              </button>
              
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-custom">
            <h3 className="text-2xl font-bold text-dark-gray mb-4">
              その他のご質問がございましたら
            </h3>
            <p className="text-gray-600 mb-6">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
            <a href="#contact" className="btn-primary inline-block">
              お問い合わせする
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ 