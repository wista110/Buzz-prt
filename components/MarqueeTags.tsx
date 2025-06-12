import React from 'react';

// TypeScript型定義
interface MarqueeTagsProps {
  tags: string[];
}

const MarqueeTags: React.FC<MarqueeTagsProps> = ({ tags }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        {/* マーキー効果のタグエリア */}
        <div className="relative overflow-hidden whitespace-nowrap bg-white/80 backdrop-blur-sm rounded-2xl ">
          {/* 左右にフェードアウト効果を追加 */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* 無限スクロールコンテナ */}
          <div className="flex animate-marquee-infinite py-6">
            {/* タグ配列を3回複製して完全に途切れない無限ループを作成 */}
            {[...tags, ...tags, ...tags].map((tag, index) => (
              <span
                key={index}
                className="tag inline-block mx-3 px-4 py-2 bg-white text-black border-2 border-black rounded-full text-sm md:text-base font-medium hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap flex-shrink-0"
              >
                {tag}
              </span>
            ))}
          </div>
        
        
        {/* 2つ目のマーキーコンテナ（左→右方向） */}
        
          {/* 左右にフェードアウト効果を追加 */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* 無限スクロールコンテナ（逆方向） */}
          <div className="flex animate-marquee-reverse py-6">
            {/* タグ配列を3回複製して完全に途切れない無限ループを作成 */}
            {[...tags, ...tags, ...tags].map((tag, index) => (
              <span
                key={`reverse-${index}`}
                className="tag inline-block mx-3 px-4 py-2 bg-white text-black border-2 border-black rounded-full text-sm md:text-base font-medium hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap flex-shrink-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeTags;
