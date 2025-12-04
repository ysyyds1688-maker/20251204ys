import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

export const SlotsGuidesIndexPage = () => {
  const guides = [
    {
      title: '老虎機 RTP 選擇指南',
      url: '/guides/games/slots/rtp-guide',
      desc: '了解 RTP 的重要性，如何選擇高回報率的老虎機遊戲',
      readTime: '6 min',
      level: '新手',
    },
    {
      title: '老虎機波動率分析',
      url: '/guides/games/slots/volatility',
      desc: '深入解析波動率對遊戲體驗的影響，選擇適合自己的遊戲類型',
      readTime: '7 min',
      level: '中階',
    },
    {
      title: '累積獎池策略',
      url: '/guides/games/slots/jackpot-strategy',
      desc: '如何選擇和玩累積獎池遊戲，提高中獎機率',
      readTime: '8 min',
      level: '中階',
    },
  ];

  return (
    <>
      <SEO
        title="老虎機攻略 - RTP、波動率、獎池策略完整教學"
        description="YS 娛樂城老虎機攻略：提供 RTP 選擇、波動率分析、累積獎池策略等完整教學，幫助玩家選擇最適合的老虎機遊戲。"
        keywords="老虎機攻略,老虎機技巧,RTP選擇,波動率分析,累積獎池策略"
        canonical="/guides/games/slots"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '老虎機攻略', url: '/guides/games/slots' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">老虎機攻略</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.url}
                to={guide.url}
                className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <span className="text-xs px-3 py-1 bg-amber-900/30 text-amber-400 border border-amber-900 rounded-full font-bold mb-4 inline-block">
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

