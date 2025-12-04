import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';

export const WithdrawalIndexPage = () => {
  const guides = [
    {
      title: '出金流程詳解',
      url: '/guides/withdrawal',
      desc: '完整的出金步驟說明',
    },
    {
      title: '出金速度比較',
      url: '/guides/casino/withdrawal/speed-comparison',
      desc: '各種出金方式的速度比較',
    },
    {
      title: '出金問題排除',
      url: '/guides/casino/withdrawal/troubleshooting',
      desc: '常見出金問題的解決方法',
    },
  ];

  return (
    <>
      <SEO
        title="出金相關教學 - 流程、速度比較、問題排除"
        description="YS 娛樂城出金教學：提供出金流程、速度比較、問題排除等詳細教學。"
        keywords="出金教學,出金流程,出金速度,出金問題"
        canonical="/guides/casino/withdrawal"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '出金相關', url: '/guides/casino/withdrawal' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">出金相關教學</h1>
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

