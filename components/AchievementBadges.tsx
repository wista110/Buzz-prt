const AchievementBadges = () => {
  const badges = [
    { title: "導入企業数", value: "300+", subtitle: "社" },
    { title: "商談成功率", value: "91%", subtitle: "継続中" },
    { title: "月間アポ数", value: "1,200+", subtitle: "件" },
  ]

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-dark-gray mb-4">
            圧倒的な実績でお客様に選ばれています
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center p-8 bg-light-gray rounded-2xl">
              <div className="text-5xl font-bold text-primary-red mb-2">
                {badge.value}
              </div>
              <div className="text-lg font-semibold text-dark-gray mb-1">
                {badge.title}
              </div>
              <div className="text-gray-600">
                {badge.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementBadges 