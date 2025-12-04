import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Zap, ShieldCheck, Gift, Star } from 'lucide-react';

export const USDTFriendlyPage = () => {
  const casinos = [
    {
      name: 'YS 娛樂城',
      features: [
        { title: 'USDT 儲值', desc: '支援 TRC20/ERC20，即時到帳' },
        { title: 'USDT 出金', desc: '5分鐘內到帳，免手續費' },
        { title: 'USDT 優惠', desc: 'USDT 儲值享額外優惠' },
      ],
      rating: 4.9,
      protocols: ['TRC20', 'ERC20'],
    },
    {
      name: '平台A',
      features: [
        { title: 'USDT 儲值', desc: '支援多種協議' },
        { title: 'USDT 出金', desc: '15分鐘內到帳' },
      ],
      rating: 4.7,
      protocols: ['TRC20', 'ERC20', 'BEP20'],
    },
    {
      name: '平台B',
      features: [
        { title: 'USDT 儲值', desc: '即時到帳' },
        { title: 'USDT 出金', desc: '30分鐘內到帳' },
      ],
      rating: 4.6,
      protocols: ['TRC20'],
    },
  ];

  return (
    <>
      <SEO
        title="USDT友好娛樂城推薦 - 最適合加密貨幣用戶"
        description="推薦最適合使用USDT的娛樂城，包含儲值、出金、優惠等完整支援。YS 娛樂城提供完整的USDT服務。"
        keywords="USDT娛樂城,加密貨幣娛樂城,USDT儲值,USDT出金,USDT友好平台"
        canonical="/recommendations/best-casinos/usdt-friendly"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '娛樂城推薦', url: '/recommendations' },
              { name: 'USDT友好推薦', url: '/recommendations/best-casinos/usdt-friendly' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">USDT友好娛樂城推薦</h1>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              USDT（Tether）是目前最受歡迎的穩定幣之一，使用USDT進行儲值和出金具有速度快、手續費低、隱私性高等優勢。本推薦清單整理了最適合使用USDT的娛樂城，幫助加密貨幣用戶選擇最佳平台。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-4">
                <Zap className="text-cyan-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">即時到帳</h3>
                <p className="text-slate-400 text-sm">儲值即時，出金快速</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <ShieldCheck className="text-emerald-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">低手續費</h3>
                <p className="text-slate-400 text-sm">免手續費或低手續費</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <Gift className="text-fuchsia-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">專屬優惠</h3>
                <p className="text-slate-400 text-sm">USDT儲值享額外優惠</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {casinos.map((casino, index) => (
              <div
                key={casino.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all"
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
                    <div className="flex flex-wrap gap-2 justify-end mb-2">
                      {casino.protocols.map((protocol) => (
                        <span
                          key={protocol}
                          className="px-3 py-1 bg-emerald-900/30 text-emerald-400 border border-emerald-900 rounded-full text-sm font-bold"
                        >
                          {protocol}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm">支援協議</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {casino.features.map((feature) => (
                    <div key={feature.title} className="bg-slate-800 rounded-lg p-4">
                      <h4 className="text-white font-bold mb-2 flex items-center">
                        <ShieldCheck className="text-emerald-400 mr-2" size={18} />
                        {feature.title}
                      </h4>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6 mt-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">💡 選擇建議</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• 確認支援的USDT協議（TRC20手續費最低，ERC20最通用）</li>
              <li>• 選擇出金速度快的平台，USDT出金應該在30分鐘內完成</li>
              <li>• 注意手續費，選擇免手續費或低手續費的平台</li>
              <li>• 查看是否有USDT專屬優惠，最大化優惠價值</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

