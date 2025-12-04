import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, TrendingUp, Trophy, Zap } from 'lucide-react';

export const GameGuidesIndexPage = () => {
  const gameCategories = [
    {
      name: '百家樂攻略',
      url: '/guides/games/baccarat',
      icon: '🃏',
      desc: '從基礎玩法到進階看路法，完整百家樂攻略教學',
      articles: 5,
      color: 'from-rose-500 to-pink-600',
    },
    {
      name: '老虎機攻略',
      url: '/guides/games/slots',
      icon: '🎰',
      desc: 'RTP選擇、波動率分析、獎池策略完整指南',
      articles: 4,
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: '體育投注攻略',
      url: '/guides/games/sports',
      icon: '⚽',
      desc: '賠率分析、資金管理、滾球投注技巧',
      articles: 4,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      name: '德州撲克攻略',
      url: '/guides/games/poker',
      icon: '🀄',
      desc: '起手牌範圍、位置策略、錦標賽技巧',
      articles: 4,
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  const featuredGuides = [
    {
      title: '百家樂看路法完整教學',
      url: '/guides/games/baccarat/road-reading',
      category: '百家樂',
      readTime: '8 min',
    },
    {
      title: '老虎機 RTP 選擇指南',
      url: '/guides/games/slots/rtp-guide',
      category: '老虎機',
      readTime: '6 min',
    },
    {
      title: '體育投注資金管理法',
      url: '/guides/games/sports/bankroll-management',
      category: '體育投注',
      readTime: '10 min',
    },
  ];

  return (
    <>
      <SEO
        title="遊戲攻略 - 百家樂、老虎機、體育投注完整教學"
        description="YS 娛樂城遊戲攻略中心：提供百家樂、老虎機、體育投注、德州撲克等完整攻略教學，從基礎到進階技巧一應俱全。"
        keywords="遊戲攻略,百家樂攻略,老虎機攻略,體育投注攻略,德州撲克攻略,遊戲技巧教學"
        canonical="/guides/games"
      />
      
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
            ]}
          />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              遊戲攻略中心
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              從基礎玩法到進階技巧，完整的遊戲攻略教學幫助您提升勝率
            </p>
          </div>

          {/* 熱門攻略 */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <TrendingUp className="text-cyan-400 mr-2" size={24} />
                熱門攻略
              </h2>
              <Link to="/guides/games" className="text-cyan-400 hover:text-cyan-300 text-sm font-bold">
                查看全部 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <Link
                  key={guide.url}
                  to={guide.url}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-cyan-400 font-bold">{guide.category}</span>
                    <span className="text-xs text-slate-500">{guide.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {guide.title}
                  </h3>
                  <div className="flex items-center text-cyan-400 text-sm font-bold mt-4">
                    閱讀更多 <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 遊戲分類 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="text-fuchsia-400 mr-2" size={24} />
              攻略分類
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gameCategories.map((category) => (
                <Link
                  key={category.url}
                  to={category.url}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-3xl`}></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-slate-400 mb-4">{category.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{category.articles} 篇文章</span>
                      <span className="text-cyan-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                        查看攻略 <ArrowRight size={16} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

