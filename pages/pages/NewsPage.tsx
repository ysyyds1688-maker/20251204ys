import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewsPage = () => {
  const articles = [
    { id: 1, title: '百家樂技巧全攻略', date: '2024-03-20', category: '遊戲技巧', image: '/images/articles/baccarat-tips.png' },
    { id: 2, title: '老虎機推薦 2025', date: '2024-03-18', category: '遊戲推薦', image: '/images/articles/slots-recommendation.png' },
    { id: 3, title: '體育下注分析', date: '2024-03-15', category: '賽事分析', image: '/images/articles/sports-analysis.png' },
    { id: 4, title: '娛樂城推薦 2025', date: '2024-03-12', category: '平台推薦', image: '/images/articles/casino-recommendation.png' },
  ];

  return (
    <>
      <SEO
        title="最新消息 - 賽事新聞、玩家攻略、遊戲技巧"
        description="YS 娛樂城最新消息：提供賽事新聞、玩家攻略、遊戲技巧、產業動態等最新資訊。"
        keywords="最新消息,賽事新聞,玩家攻略,遊戲技巧,百家樂技巧,老虎機推薦,體育下注分析,娛樂城推薦2025"
        canonical="/news"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '最新消息', url: '/news' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">最新消息</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <div 
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${article.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-cyan-400 font-bold mb-2 block">{article.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar size={14} className="mr-2" />
                    {article.date}
                  </div>
                  <div className="flex items-center text-cyan-400 text-sm font-bold mt-4 group-hover:translate-x-1 transition-transform">
                    閱讀更多 <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

