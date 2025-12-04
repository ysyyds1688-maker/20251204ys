import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { CreditCard, Clock, ShieldCheck } from 'lucide-react';

export const DepositMethodsPage = () => {
  const methods = [
    {
      name: 'USDT (TRC20/ERC20)',
      speed: '即時到帳',
      fee: '免手續費',
      min: '100',
      icon: '💎',
      pros: ['速度最快', '手續費低', '隱私性高'],
      cons: ['需要加密貨幣錢包'],
    },
    {
      name: '銀行轉帳',
      speed: '1-3個工作天',
      fee: '視銀行而定',
      min: '500',
      icon: '🏦',
      pros: ['安全可靠', '適合大額', '傳統方式'],
      cons: ['到帳較慢', '需提供銀行資訊'],
    },
    {
      name: '線上支付',
      speed: '即時到帳',
      fee: '2-3%',
      min: '200',
      icon: '💳',
      pros: ['方便快速', '即時到帳'],
      cons: ['手續費較高'],
    },
  ];

  return (
    <>
      <SEO
        title="儲值方式比較 - USDT、銀行轉帳、線上支付完整對比"
        description="YS 娛樂城儲值方式比較：詳細對比 USDT、銀行轉帳、線上支付等各種儲值方式的優缺點、速度、手續費等，幫助您選擇最適合的方式。"
        keywords="儲值方式,USDT儲值,銀行轉帳,線上支付,儲值比較"
        canonical="/guides/casino/deposit/methods"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '儲值相關', url: '/guides/casino/deposit' },
              { name: '儲值方式比較', url: '/guides/casino/deposit/methods' },
            ]}
          />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            儲值方式比較
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {methods.map((method) => (
              <div
                key={method.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{method.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-400 text-sm">
                    <Clock size={14} className="mr-2" />
                    到帳速度：<span className="text-white ml-1">{method.speed}</span>
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <CreditCard size={14} className="mr-2" />
                    手續費：<span className="text-white ml-1">{method.fee}</span>
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <ShieldCheck size={14} className="mr-2" />
                    最低金額：<span className="text-white ml-1">${method.min}</span>
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-emerald-400 mb-1">優點</h4>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {method.pros.map((pro) => (
                        <li key={pro}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-400 mb-1">缺點</h4>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {method.cons.map((con) => (
                        <li key={con}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">選擇建議</h2>
            <div className="space-y-4 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">推薦：USDT 儲值</h3>
                <p>如果您追求速度和隱私，USDT 是最佳選擇。即時到帳、免手續費，且隱私性高。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">大額儲值：銀行轉帳</h3>
                <p>如果儲值金額較大（超過10,000元），建議使用銀行轉帳，雖然到帳較慢但安全可靠。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">快速方便：線上支付</h3>
                <p>如果您需要快速儲值且不介意手續費，線上支付是最方便的選擇。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

