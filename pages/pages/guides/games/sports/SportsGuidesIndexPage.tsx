import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

export const SportsGuidesIndexPage = () => {
  const guides = [
    {
      title: '體育投注賠率分析',
      url: '/guides/games/sports/odds-analysis',
      desc: '學習如何分析賠率，識別價值投注機會',
      readTime: '8 min',
      level: '中階',
    },
    {
      title: '資金管理法',
      url: '/guides/games/sports/bankroll-management',
      desc: '凱利公式、固定比例等資金管理策略',
      readTime: '10 min',
      level: '中階',
    },
    {
      title: '滾球投注技巧',
      url: '/guides/games/sports/live-betting',
      desc: '掌握滾球投注的時機與策略',
      readTime: '7 min',
      level: '進階',
    },
  ];

  return (
    <>
      <SEO
        title="體育投注攻略 - 賠率分析、資金管理、滾球投注"
        description="YS 娛樂城體育投注攻略：提供賠率分析、資金管理、滾球投注等完整教學，幫助玩家提高投注勝率。"
        keywords="體育投注攻略,賠率分析,資金管理,滾球投注,運彩技巧"
        canonical="/guides/games/sports"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '體育投注攻略', url: '/guides/games/sports' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">體育投注攻略</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.url}
                to={guide.url}
                className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <span className="text-xs px-3 py-1 bg-emerald-900/30 text-emerald-400 border border-emerald-900 rounded-full font-bold mb-4 inline-block">
                  {guide.level}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-400 mb-4">{guide.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {guide.readTime}
                  </div>
                  <ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

