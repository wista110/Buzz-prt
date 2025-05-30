const ServiceIntroduction = () => {
  return (
    <section id="features" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            そもそも<span className="text-primary-red">カリトルくん</span>とは
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            商談創出に特化した営業代行サービスです。
            <br />
            独自のノウハウと豊富な経験で、質の高いアポイントメントを継続的にお届けします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左側：サービス説明 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-gray mb-2">
                    徹底したターゲティング
                  </h3>
                  <p className="text-gray-600">
                    お客様のビジネスモデルに最適化されたターゲット企業を選定し、効率的にアプローチします。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-gray mb-2">
                    質の高いアプローチ
                  </h3>
                  <p className="text-gray-600">
                    単なる営業メールではなく、相手のニーズに合わせたパーソナライズされたアプローチを実施します。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-gray mb-2">
                    継続的なフォローアップ
                  </h3>
                  <p className="text-gray-600">
                    一度のアプローチで終わらず、適切なタイミングでのフォローアップで成約率を向上させます。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-light-red p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-primary-red mb-3">
                結果として得られるもの
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-primary-red mr-2">✓</span>
                  月間30〜50件の質の高いアポイント
                </li>
                <li className="flex items-center">
                  <span className="text-primary-red mr-2">✓</span>
                  成約率の向上と売上アップ
                </li>
                <li className="flex items-center">
                  <span className="text-primary-red mr-2">✓</span>
                  営業チームのリソース最適化
                </li>
              </ul>
            </div>
          </div>

          {/* 右側：イラスト */}
          <div className="relative">
            <div className="bg-gradient-to-br from-light-red to-white rounded-2xl p-8">
              <div className="text-center">
                <div className="w-full h-80 bg-gradient-to-br from-accent-red to-primary-red rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-8xl">🎯</div>
                </div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4">
                  ターゲットを絞った
                  <br />
                  効率的な営業代行
                </h3>
                <p className="text-gray-600">
                  経験豊富な営業プロフェッショナルが
                  <br />
                  お客様の代わりに商談を創出します
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceIntroduction 