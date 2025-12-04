import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CreditCard, TrendingUp, Gift } from 'lucide-react';

export const CasinoGuidesIndexPage = () => {
  const categories = [
    {
      name: '註冊相關',
      url: '/guides/casino/registration',
      icon: ShieldCheck,
      desc: '完整註冊流程、身份驗證、優惠領取教學',
      color: 'text-cyan-400',
      bg: 'bg-cyan-900/10',
    },
    {
      name: '儲值相關',
      url: '/guides/casino/deposit',
      icon: CreditCard,
      desc: '儲值方式比較、USDT儲值、銀行轉帳教學',
      color: 'text-fuchsia-400',
      bg: 'bg-fuchsia-900/10',
    },
    {
      name: '出金相關',
      url: '/guides/casino/withdrawal',
      icon: TrendingUp,
      desc: '出金流程、速度比較、問題排除',
      color: 'text-emerald-400',
      bg: 'bg-emerald-900/10',
    },
    {
      name: '優惠相關',
      url: '/guides/casino/bonuses',
      icon: Gift,
      desc: '優惠類型解析、流水要求計算、使用技巧',
      color: 'text-amber-400',
      bg: 'bg-amber-900/10',
    },
  ];

  return (
    <>
      <SEO
        title="娛樂城攻略 - 註冊、儲值、出金完整教學"
        description="YS 娛樂城攻略中心：提供註冊、儲值、出金、優惠使用等完整教學，幫助玩家快速上手並安全使用娛樂城服務。"
        keywords="娛樂城攻略,娛樂城教學,註冊教學,儲值教學,出金教學,優惠教學"
        canonical="/guides/casino"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
            ]}
          />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              娛樂城攻略中心
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              從註冊到出金，完整的娛樂城使用教學幫助您安全、快速地享受服務
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link
                key={category.url}
                to={category.url}
                className={`bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group ${category.bg}`}
              >
                <div className="flex items-center mb-4">
                  <category.icon className={`${category.color} mr-3`} size={32} />
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                </div>
                <p className="text-slate-400 mb-4">{category.desc}</p>
                <div className="flex items-center text-cyan-400 font-bold text-sm">
                  查看攻略 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

