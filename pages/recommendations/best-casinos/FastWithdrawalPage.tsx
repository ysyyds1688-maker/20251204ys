import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Zap, Clock, ShieldCheck, Star } from 'lucide-react';

export const FastWithdrawalPage = () => {
  const casinos = [
    {
      name: 'YS 娛樂城',
      speed: '5分鐘',
      methods: ['USDT (TRC20)', 'USDT (ERC20)', '銀行轉帳'],
      rating: 4.9,
      features: ['最快出金速度', '24/7 自動審核', '免手續費'],
    },
    {
      name: '平台A',
      speed: '15分鐘',
      methods: ['USDT', '銀行轉帳'],
      rating: 4.7,
      features: ['快速審核', '多種出金方式'],
    },
    {
      name: '平台B',
      speed: '30分鐘',
      methods: ['USDT', '線上支付'],
      rating: 4.6,
      features: ['穩定可靠', '客服支援'],
    },
  ];

  return (
    <>
      <SEO
        title="快速出金娛樂城推薦 - 5分鐘內到帳"
        description="推薦出金速度最快的娛樂城，5分鐘內到帳，支援USDT等多種出金方式。YS 娛樂城提供業界最快出金服務。"
        keywords="快速出金,出金速度,5分鐘出金,USDT出金,快速出金娛樂城"
        canonical="/recommendations/best-casinos/fast-withdrawal"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '娛樂城推薦', url: '/recommendations' },
              { name: '快速出金推薦', url: '/recommendations/best-casinos/fast-withdrawal' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">快速出金娛樂城推薦</h1>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              出金速度是選擇娛樂城的重要指標之一。快速出金不僅能讓您更快獲得資金，也反映了平台的資金實力和服務品質。本推薦清單整理了出金速度最快的娛樂城，幫助您選擇最適合的平台。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-4">
                <Zap className="text-cyan-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">最快速度</h3>
                <p className="text-slate-400 text-sm">5分鐘內到帳</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <ShieldCheck className="text-emerald-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">自動審核</h3>
                <p className="text-slate-400 text-sm">24/7 即時處理</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <Clock className="text-fuchsia-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">多種方式</h3>
                <p className="text-slate-400 text-sm">USDT、銀行轉帳</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {casinos.map((casino, index) => (
              <div
                key={casino.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
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
                    <div className="flex items-center text-cyan-400 mb-1">
                      <Zap size={20} className="mr-2" />
                      <span className="text-2xl font-bold">{casino.speed}</span>
                    </div>
                    <p className="text-slate-400 text-sm">平均出金時間</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-bold mb-3">出金方式</h4>
                    <div className="flex flex-wrap gap-2">
                      {casino.methods.map((method) => (
                        <span
                          key={method}
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-3">特色功能</h4>
                    <ul className="space-y-1">
                      {casino.features.map((feature) => (
                        <li key={feature} className="text-slate-300 text-sm flex items-center">
                          <span className="text-emerald-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6 mt-8">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 選擇建議</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• 優先選擇支援 USDT 出金的平台，速度最快</li>
              <li>• 確認是否有自動審核系統，避免人工審核延遲</li>
              <li>• 注意出金手續費，選擇免手續費或低手續費的平台</li>
              <li>• 查看其他玩家的出金評價，確認實際出金速度</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

