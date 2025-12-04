import React, { useState, useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Smartphone, Trophy } from 'lucide-react';
import { useArticles } from '../src/services/ArticleService'; // 引入文章服務

const games = [
  { name: 'TOP 體育', category: '賽事直播', image: '/images/已使用/體育.png', link: '/games/sports' },
  { name: 'DG 真人', category: '視訊百家', image: '/images/已使用/真人 平台熱門.png', link: '/games/baccarat' },
  { name: '88SOFT 電子', category: '熱門老虎機', image: '/images/已使用/電子 平台熱門.png', link: '/games/electronic' },
  { name: '高登棋牌', category: '對戰棋牌', image: '/images/已使用/高登橋牌 平台熱門.png', link: '/games/poker' },
];

// 移除寫死的 articles
// const articles = [ ... ]; 

// 優化的圖片組件，使用原生 img 標籤以獲得更好的 SEO 和效能
const OptimizedImage = ({ src, alt, className, priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      {/* 載入中的骨架屏 */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      )}
      <img 
        src={src} 
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export const HomePage = () => {
  // 從 Google Sheet 抓取文章
  const { articles: sheetArticles, loading: articlesLoading } = useArticles();
  
  // 如果 Google Sheet 還沒載入，先用預設的（為了避免畫面空白），或者只顯示載入好的
  // 這裡我們只取前 3 篇顯示在首頁
  const displayArticles = sheetArticles.length > 0 ? sheetArticles.slice(0, 3) : [];

  // 預載入關鍵圖片
  useEffect(() => {
    const preloadImages = games.slice(0, 2).map(game => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = game.image;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      preloadImages.forEach(link => document.head.removeChild(link));
    };
  }, []);

  return (
    <>
      <SEO 
        title="YS 娛樂論壇 - 全台最公正的博弈討論區" 
        description="提供真實玩家的娛樂城評價、TOP 體育賠率分析、DG 真人百家樂攻略以及最新體驗金情報。遠離黑網，從 YS 論壇開始。" 
        keywords="娛樂城評價, 博弈論壇, TOP體育, DG真人, 體驗金, 娛樂城推薦"
      />
      
      {/* Hero Section with Banner */}
      <div className="relative h-[500px] sm:h-[600px] overflow-hidden group">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero區域影片.png"
        >
          <source src="/videos/YS89.com.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放。
        </video>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center z-10 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold mb-6 animate-fade-in-up">
            <Shield size={16} className="mr-2 fill-cyan-400" /> 
            全台唯一 公正第三方評測
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            YS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">娛樂論壇</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            不想再遇到不出金的黑網？<br className="sm:hidden"/>這裡有最真實的 <span className="text-cyan-400 font-bold">玩家實測</span> 與 <span className="text-fuchsia-400 font-bold">獨家攻略</span>。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/forum" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all hover:scale-105 flex items-center justify-center">
              進入討論區 <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/recommendations" className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full text-white font-bold text-lg hover:bg-slate-700 transition-all hover:scale-105 flex items-center justify-center">
              查看黑網名單
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <Trophy className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">出金速度評比</h3>
              <p className="text-slate-400">我們匿名實測了市面上 50+ 家娛樂城，揭露真實的存款與提款到帳時間。</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <Star className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">遊戲系統分析</h3>
              <p className="text-slate-400">深入解析 TOP 體育、DG 真人等熱門系統的優缺點，幫你找到最適合的平台。</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <Smartphone className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">優惠防坑指南</h3>
              <p className="text-slate-400">體驗金、首存紅利怎麼領最划算？看清流水陷阱，拒絕看得到吃不到。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Categories */}
      <div className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">熱門遊戲系統介紹</h2>
              <p className="text-slate-400 text-lg">本月玩家討論度最高的遊戲平台</p>
            </div>
            <Link to="/games" className="hidden md:flex items-center text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
              全部遊戲 <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <Link key={index} to={game.link} className="group relative h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                {/* 背景圖片 */}
                <OptimizedImage 
                  src={game.image} 
                  alt={game.name}
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform z-20">
                  <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2 block">{game.category}</span>
                  <h3 className="text-2xl font-black text-white mb-2">{game.name}</h3>
                  <div className="w-12 h-1 bg-cyan-500 rounded-full group-hover:w-full transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/games" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-bold">
              全部遊戲 <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Forum Topics */}
      <div className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">本週熱門話題</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              看看大家都在討論哪些平台與攻略
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesLoading && displayArticles.length === 0 ? (
              // Loading Skeleton
              [1, 2, 3].map(i => (
                <div key={i} className="bg-slate-900 rounded-2xl h-96 animate-pulse border border-slate-800"></div>
              ))
            ) : (
              displayArticles.map((article) => (
                <Link key={article.id} to={`/topic/${article.slug}`} className="group block bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage 
                      src={article.image} 
                      alt={article.title}
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-cyan-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-slate-500 text-xs mb-3">
                      <Clock size={12} className="mr-1" /> {article.date}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-cyan-500 text-sm font-bold">
                      閱讀全文 <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/forum" className="inline-flex items-center px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-white font-bold transition-all">
              進入討論區查看更多
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// 為了避免在 HomePage 中重新定義，這裡簡單模擬 Clock icon，實際應該 import
const Clock = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
