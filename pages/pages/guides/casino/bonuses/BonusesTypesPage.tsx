import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Gift, Sparkles, Star } from 'lucide-react';

export const BonusesTypesPage = () => {
  const bonusTypes = [
    {
      name: '體驗金',
      icon: Gift,
      color: 'text-fuchsia-400',
      desc: '新會員註冊即可獲得，無需存款',
      amount: '168',
      wagering: '10倍',
    },
    {
      name: '首存優惠',
      icon: Sparkles,
      color: 'text-cyan-400',
      desc: '首次儲值可獲得額外紅利',
      amount: '最高100%',
      wagering: '15倍',
    },
    {
      name: '返水優惠',
      icon: Star,
      color: 'text-yellow-400',
      desc: '根據投注金額獲得返水',
      amount: '0.5-1%',
      wagering: '1倍',
    },
  ];

  return (
    <>
      <SEO
        title="優惠類型解析 - 體驗金、首存、返水等優惠說明"
        description="YS 娛樂城優惠類型解析：詳細說明體驗金、首存優惠、返水優惠等各種優惠類型的規則、金額和流水要求。"
        keywords="優惠類型,體驗金,首存優惠,返水優惠,優惠說明"
        canonical="/guides/casino/bonuses/types"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '優惠相關', url: '/guides/casino/bonuses' },
              { name: '優惠類型解析', url: '/guides/casino/bonuses/types' },
            ]}
          />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">優惠類型解析</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {bonusTypes.map((bonus) => (
              <div
                key={bonus.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
              >
                <bonus.icon className={`${bonus.color} mb-4`} size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">{bonus.name}</h3>
                <p className="text-slate-400 mb-4">{bonus.desc}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">優惠金額：</span>
                    <span className="text-white font-bold">{bonus.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">流水要求：</span>
                    <span className="text-white font-bold">{bonus.wagering}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">優惠使用說明</h2>
            <div className="space-y-4 text-slate-300">
              <p>每種優惠類型都有不同的規則和流水要求，詳細說明請參考各優惠頁面。</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

