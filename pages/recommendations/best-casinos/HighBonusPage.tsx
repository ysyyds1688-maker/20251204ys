import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Gift, Star, Sparkles, TrendingUp } from 'lucide-react';

export const HighBonusPage = () => {
  const casinos = [
    {
      name: 'YS 娛樂城',
      bonuses: [
        { type: '體驗金', amount: '168', desc: '新會員註冊即送' },
        { type: '首存優惠', amount: '100%', desc: '最高10,000元' },
        { type: '返水', amount: '1%', desc: '每日返水' },
      ],
      rating: 4.9,
      totalValue: '10,168',
    },
    {
      name: '平台A',
      bonuses: [
        { type: '首存優惠', amount: '150%', desc: '最高15,000元' },
        { type: '二存優惠', amount: '50%', desc: '最高5,000元' },
        { type: '返水', amount: '0.8%', desc: '每週返水' },
      ],
      rating: 4.7,
      totalValue: '20,000',
    },
    {
      name: '平台B',
      bonuses: [
        { type: '首存優惠', amount: '200%', desc: '最高20,000元' },
        { type: '返水', amount: '1.2%', desc: '每日返水' },
      ],
      rating: 4.6,
      totalValue: '20,000',
    },
  ];

  return (
    <>
      <SEO
        title="高額優惠娛樂城推薦 - 最高紅利與體驗金"
        description="推薦提供最高額優惠的娛樂城，包含體驗金、首存優惠、返水等。YS 娛樂城提供體驗金168、首存100%等優惠。"
        keywords="高額優惠,體驗金,首存優惠,返水優惠,娛樂城優惠,體驗金168"
        canonical="/recommendations/best-casinos/high-bonus"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '娛樂城推薦', url: '/recommendations' },
              { name: '高額優惠推薦', url: '/recommendations/best-casinos/high-bonus' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">高額優惠娛樂城推薦</h1>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              優惠活動是娛樂城吸引玩家的主要方式之一。高額優惠可以讓您獲得更多資金，延長遊戲時間，提高獲勝機會。本推薦清單整理了提供最高額優惠的娛樂城，幫助您最大化遊戲價值。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-4">
                <Gift className="text-fuchsia-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">體驗金</h3>
                <p className="text-slate-400 text-sm">新會員註冊即送</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <Sparkles className="text-cyan-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">首存優惠</h3>
                <p className="text-slate-400 text-sm">最高200%紅利</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <TrendingUp className="text-emerald-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">返水優惠</h3>
                <p className="text-slate-400 text-sm">每日/每週返水</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {casinos.map((casino, index) => (
              <div
                key={casino.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-fuchsia-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-black text-white mr-3">#{index + 1}</span>
                      <h3 className="text-2xl font-bold text-white">{casino.name}</h3>
                    </div>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={i < Math.floor(casino.rating) ? '#fbbf24' : 'none'}
                          className={i < Math.floor(casino.rating) ? 'text-yellow-400' : 'text-slate-700'}
                        />
                      ))}
                      <span className="ml-2 text-slate-400 font-bold">{casino.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-fuchsia-400 mb-1">
                      <span className="text-2xl font-bold">最高 {casino.totalValue}</span>
                      <span className="text-sm ml-1">元</span>
                    </div>
                    <p className="text-slate-400 text-sm">總優惠價值</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {casino.bonuses.map((bonus) => (
                    <div key={bonus.type} className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Gift className="text-fuchsia-400 mr-2" size={20} />
                        <h4 className="text-white font-bold">{bonus.type}</h4>
                      </div>
                      <p className="text-fuchsia-400 font-bold text-lg mb-1">{bonus.amount}</p>
                      <p className="text-slate-400 text-sm">{bonus.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-6 mt-8">
            <h2 className="text-xl font-bold text-amber-400 mb-4">⚠️ 注意事項</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• 注意優惠的流水要求，確保能夠完成</li>
              <li>• 比較不同平台的優惠條件，選擇最適合的</li>
              <li>• 不要只看優惠金額，也要考慮出金速度和安全性</li>
              <li>• 閱讀優惠條款，了解使用限制</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

