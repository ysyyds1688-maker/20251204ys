import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

export const PokerGuidesIndexPage = () => {
  const guides = [
    {
      title: '德州撲克起手牌範圍',
      url: '/guides/games/poker/starting-hands',
      desc: '學習翻牌前的起手牌選擇範圍，提高勝率',
      readTime: '9 min',
      level: '中階',
    },
    {
      title: '位置策略',
      url: '/guides/games/poker/position-play',
      desc: '了解位置在德州撲克中的重要性與策略',
      readTime: '8 min',
      level: '中階',
    },
    {
      title: '錦標賽策略',
      url: '/guides/games/poker/tournament-strategy',
      desc: '學習錦標賽不同階段的策略調整',
      readTime: '10 min',
      level: '進階',
    },
  ];

  return (
    <>
      <SEO
        title="德州撲克攻略 - 起手牌、位置策略、錦標賽技巧"
        description="YS 娛樂城德州撲克攻略：提供起手牌範圍、位置策略、錦標賽技巧等完整教學，幫助玩家提升撲克水平。"
        keywords="德州撲克攻略,起手牌範圍,位置策略,錦標賽策略,撲克技巧"
        canonical="/guides/games/poker"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '德州撲克攻略', url: '/guides/games/poker' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">德州撲克攻略</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.url}
                to={guide.url}
                className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <span className="text-xs px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-900 rounded-full font-bold mb-4 inline-block">
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

