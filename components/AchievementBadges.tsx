import React, { useState, useEffect, useRef } from 'react';

const AchievementBadges = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const badges = [
    { title: "導入企業数", value: 157, suffix: "社", subtitle: "" },
    { title: "月間平均再生率", value: 255, suffix: "万", subtitle: "(1アカウント)" },
    { title: "クライアント継続率", value: 88.9, suffix: "%", subtitle: "" },
  ];

  // カウントアップアニメーション
  useEffect(() => {
    if (isVisible) {
      badges.forEach((badge, index) => {
        let start = 0;
        const duration = 2000; // 2秒
        const increment = badge.value / (duration / 16); // 60fpsを想定

        const timer = setInterval(() => {
          start += increment;
          if (start >= badge.value) {
            start = badge.value;
            clearInterval(timer);
          }
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = start;
            return newValues;
          });
        }, 16);
      });
    }
  }, [isVisible]);

  // インtersection Observer でスクロール検出
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    
    <section 
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-50 via-white to-primary-light/20 py-16 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-main bg-clip-text text-transparent">
              圧倒的な実績で
            </span>
            <br/>
            <span className="text-gray-700">
              お客様に選ばれています
            </span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-main mx-auto rounded-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className={`group bg-white/80 backdrop-blur-sm text-center p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white ${
                isVisible 
                  ? index === 0 
                    ? 'animate-fade-in-up-delay-1' 
                    : index === 1 
                    ? 'animate-fade-in-up-delay-2' 
                    : 'animate-fade-in-up-delay-3'
                  : 'opacity-0'
              }`}
            >
              {/* 数値表示 */}
              <div className="relative mb-4">
                <div className="text-6xl lg:text-7xl font-extrabold bg-gradient-main bg-clip-text text-transparent leading-none">
                  {badge.suffix === '%' 
                    ? animatedValues[index].toFixed(1)
                    : Math.floor(animatedValues[index])
                  }
                  <span className="text-4xl lg:text-5xl">{badge.suffix}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-main bg-clip-text text-transparent opacity-20 blur-sm text-6xl lg:text-7xl font-extrabold">
                  {badge.suffix === '%' 
                    ? animatedValues[index].toFixed(1)
                    : Math.floor(animatedValues[index])
                  }
                  <span className="text-4xl lg:text-5xl">{badge.suffix}</span>
                </div>
              </div>
              
              {/* タイトル */}
              <div className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                {badge.title}
              </div>
              
              {/* サブタイトル */}
              {badge.subtitle && (
                <div className="text-gray-600 text-base lg:text-lg font-medium">
                  {badge.subtitle}
                </div>
              )}
              
              {/* ホバー時の装飾 */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-main group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* 追加の説明テキスト */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            多くの企業様に信頼され、継続的にご利用いただいている実績があります。
            <br className="hidden md:block" />
            あなたのビジネスも次のサクセスストーリーにしませんか？
          </p>
        </div>
      </div>
    </section>
  )
}

export default AchievementBadges 