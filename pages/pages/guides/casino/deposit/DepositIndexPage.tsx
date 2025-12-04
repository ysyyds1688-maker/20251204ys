import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';

export const DepositIndexPage = () => {
  const guides = [
    {
      title: '儲值方式比較',
      url: '/guides/casino/deposit/methods',
      desc: '各種儲值方式的優缺點比較',
    },
    {
      title: 'USDT 儲值完整教學',
      url: '/guides/usdt-deposit',
      desc: 'USDT 儲值的詳細步驟教學',
    },
    {
      title: '銀行轉帳教學',
      url: '/guides/casino/deposit/bank-transfer',
      desc: '使用銀行轉帳進行儲值',
    },
  ];

  return (
    <>
      <SEO
        title="儲值相關教學 - 方式比較、USDT、銀行轉帳"
        description="YS 娛樂城儲值教學：提供各種儲值方式比較、USDT儲值、銀行轉帳等詳細教學。"
        keywords="儲值教學,USDT儲值,銀行轉帳,儲值方式"
        canonical="/guides/casino/deposit"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '儲值相關', url: '/guides/casino/deposit' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">儲值相關教學</h1>
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

