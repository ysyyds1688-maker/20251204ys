import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Zap, Clock } from 'lucide-react';

export const WithdrawalSpeedComparisonPage = () => {
  const methods = [
    { name: 'USDT (TRC20)', speed: '5分鐘', icon: Zap, color: 'text-cyan-400' },
    { name: 'USDT (ERC20)', speed: '10-15分鐘', icon: Zap, color: 'text-cyan-400' },
    { name: '銀行轉帳', speed: '1-3個工作天', icon: Clock, color: 'text-slate-400' },
  ];

  return (
    <>
      <SEO
        title="出金速度比較 - 各種出金方式速度對比"
        description="YS 娛樂城出金速度比較：詳細對比 USDT、銀行轉帳等各種出金方式的速度，幫助您選擇最快的出金方式。"
        keywords="出金速度,快速出金,USDT出金,出金時間"
        canonical="/guides/casino/withdrawal/speed-comparison"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '出金相關', url: '/guides/casino/withdrawal' },
              { name: '出金速度比較', url: '/guides/casino/withdrawal/speed-comparison' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">出金速度比較</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {methods.map((method) => (
                <div key={method.name} className="bg-slate-800 rounded-xl p-6 text-center">
                  <method.icon className={`${method.color} mx-auto mb-3`} size={32} />
                  <h3 className="text-white font-bold mb-2">{method.name}</h3>
                  <p className={`${method.color} font-bold text-lg`}>{method.speed}</p>
                </div>
              ))}
            </div>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">出金速度詳解</h2>
              <div className="space-y-4 text-slate-300">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">USDT (TRC20) - 最快</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">到帳時間：</strong>5 分鐘內</li>
                    <li><strong className="text-white">手續費：</strong>免手續費（平台）</li>
                    <li><strong className="text-white">區塊鏈手續費：</strong>約 1 USDT（由區塊鏈收取）</li>
                    <li><strong className="text-white">優點：</strong>速度最快、手續費低、隱私性高</li>
                    <li><strong className="text-white">缺點：</strong>需要加密貨幣錢包</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">USDT (ERC20) - 快速</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">到帳時間：</strong>10-15 分鐘</li>
                    <li><strong className="text-white">手續費：</strong>免手續費（平台）</li>
                    <li><strong className="text-white">區塊鏈手續費：</strong>約 5-10 USDT（由區塊鏈收取）</li>
                    <li><strong className="text-white">優點：</strong>速度快、通用性高</li>
                    <li><strong className="text-white">缺點：</strong>手續費較 TRC20 高</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-400 mb-3">銀行轉帳 - 較慢</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-white">到帳時間：</strong>1-3 個工作天</li>
                    <li><strong className="text-white">手續費：</strong>視銀行而定</li>
                    <li><strong className="text-white">優點：</strong>安全可靠、適合大額</li>
                    <li><strong className="text-white">缺點：</strong>到帳較慢、需提供銀行資訊</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">速度比較表</h2>
              <div className="bg-slate-800 rounded-lg p-6 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="pb-3 text-white font-bold">出金方式</th>
                      <th className="pb-3 text-white font-bold">到帳時間</th>
                      <th className="pb-3 text-white font-bold">手續費</th>
                      <th className="pb-3 text-white font-bold">推薦度</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700">
                      <td className="py-3">USDT (TRC20)</td>
                      <td className="py-3 text-cyan-400 font-bold">5 分鐘</td>
                      <td className="py-3">免手續費</td>
                      <td className="py-3 text-emerald-400">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3">USDT (ERC20)</td>
                      <td className="py-3 text-cyan-400 font-bold">10-15 分鐘</td>
                      <td className="py-3">免手續費</td>
                      <td className="py-3 text-emerald-400">⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="py-3">銀行轉帳</td>
                      <td className="py-3 text-amber-400 font-bold">1-3 工作天</td>
                      <td className="py-3">視銀行而定</td>
                      <td className="py-3 text-amber-400">⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 選擇建議</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong className="text-white">追求速度：</strong>選擇 USDT (TRC20)，5 分鐘內到帳</li>
                <li>• <strong className="text-white">大額出金：</strong>可以選擇銀行轉帳，雖然較慢但安全可靠</li>
                <li>• <strong className="text-white">手續費考量：</strong>USDT (TRC20) 手續費最低，推薦使用</li>
                <li>• <strong className="text-white">首次出金：</strong>建議先完成身份驗證，確保出金順利</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

