import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

export const BaccaratGuidesIndexPage = () => {
  const guides = [
    {
      title: '百家樂基礎教學',
      url: '/guides/games/baccarat/basics',
      desc: '從零開始學習百家樂，包含規則、玩法、點數計算等基礎知識',
      readTime: '6 min',
      level: '新手',
    },
    {
      title: '百家樂看路法完整教學',
      url: '/guides/games/baccarat/road-reading',
      desc: '深入解析大路、小路、蟑螂路等各種路單的判讀技巧',
      readTime: '8 min',
      level: '中階',
    },
    {
      title: '百家樂下注策略',
      url: '/guides/games/baccarat/betting-strategy',
      desc: '學習資金管理、下注比例、止損止盈等策略技巧',
      readTime: '10 min',
      level: '中階',
    },
    {
      title: '百家樂進階技巧',
      url: '/guides/games/baccarat/advanced-tips',
      desc: '職業玩家使用的進階技巧與心理戰術',
      readTime: '12 min',
      level: '進階',
    },
  ];

  return (
    <>
      <SEO
        title="百家樂攻略 - 完整教學從基礎到進階"
        description="YS 娛樂城百家樂攻略：提供從基礎玩法到進階看路法的完整教學，包含大路、小路、下注策略等技巧。"
        keywords="百家樂攻略,百家樂技巧,百家樂看路法,百家樂教學,百家樂策略"
        canonical="/guides/games/baccarat"
      />
      
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '百家樂攻略', url: '/guides/games/baccarat' },
            ]}
          />
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              百家樂攻略
            </h1>
            <p className="text-xl text-slate-400">
              從基礎玩法到進階看路法，完整的百家樂攻略教學
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.url}
                to={guide.url}
                className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                    guide.level === '新手' ? 'bg-green-900/30 text-green-400 border border-green-900' :
                    guide.level === '中階' ? 'bg-amber-900/30 text-amber-400 border border-amber-900' :
                    'bg-purple-900/30 text-purple-400 border border-purple-900'
                  }`}>
                    {guide.level}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {guide.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-400 mb-4">{guide.desc}</p>
                <div className="flex items-center text-cyan-400 font-bold text-sm">
                  閱讀攻略 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <BookOpen className="text-fuchsia-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">相關資源</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/games/baccarat" className="text-cyan-400 hover:text-cyan-300">
                → 真人百家樂遊戲頁面
              </Link>
              <Link to="/news" className="text-cyan-400 hover:text-cyan-300">
                → 最新百家樂技巧文章
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

