const PainPoints = () => {
  return (
    <section className="bg-light-red py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold text-dark-gray mb-6">
            こんなお悩み、<br/>
            ありませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            多くの企業様が抱えるSNS運用の課題
          </p>
          
          {/* 悩みイラスト */}
          <div className="flex justify-center mb-12">
            <img 
              src="/worries.png" 
              alt="SNS運用の悩み"
              className="w-full h-auto"
              style={{
                width: 'clamp(300px, 70vw, 800px)',
                maxWidth: '100%'
              }}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-main text-white px-8 py-4 rounded-2xl">
            <span className="text-xl font-bold">
              そんなお悩みを「Buzz Partners」が解決します！
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PainPoints 