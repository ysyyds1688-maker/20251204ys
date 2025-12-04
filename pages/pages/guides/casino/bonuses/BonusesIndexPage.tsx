import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';

export const BonusesIndexPage = () => {
  const guides = [
    {
      title: '優惠類型解析',
      url: '/guides/casino/bonuses/types',
      desc: '各種優惠類型的詳細說明',
    },
    {
      title: '流水要求計算',
      url: '/guides/casino/bonuses/wagering-requirements',
      desc: '如何計算和完成流水要求',
    },
    {
      title: '優惠使用最佳實踐',
      url: '/guides/casino/bonuses/best-practices',
      desc: '如何最大化優惠價值',
    },
  ];

  return (
    <>
      <SEO
        title="優惠相關教學 - 類型解析、流水計算、使用技巧"
        description="YS 娛樂城優惠教學：提供優惠類型解析、流水要求計算、使用最佳實踐等詳細教學。"
        keywords="優惠教學,流水要求,優惠類型,優惠使用"
        canonical="/guides/casino/bonuses"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '優惠相關', url: '/guides/casino/bonuses' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">優惠相關教學</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.url}
                to={guide.url}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-400">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

