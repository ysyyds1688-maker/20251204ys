import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Calculator } from 'lucide-react';

export const BonusesWageringRequirementsPage = () => {
  return (
    <>
      <SEO
        title="流水要求計算 - 如何計算和完成流水要求"
        description="YS 娛樂城流水要求計算教學：詳細說明如何計算流水要求，包含計算公式、完成方式等，幫助您順利完成流水並申請出金。"
        keywords="流水要求,流水計算,流水倍數,完成流水"
        canonical="/guides/casino/bonuses/wagering-requirements"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '優惠相關', url: '/guides/casino/bonuses' },
              { name: '流水要求計算', url: '/guides/casino/bonuses/wagering-requirements' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">流水要求計算</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Calculator className="text-cyan-400 mr-3" size={32} />
              <p className="text-lg text-slate-300">
                流水要求 = (優惠金額 + 儲值金額) × 流水倍數
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">計算範例</h3>
              <p className="text-slate-300 mb-2">假設您獲得體驗金168，流水倍數為10倍：</p>
              <p className="text-slate-300 mb-2">流水要求 = 168 × 10 = 1,680</p>
              <p className="text-slate-300">這表示您需要投注總額達到1,680元才能申請出金。</p>
            </div>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">流水要求詳解</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <p className="text-slate-300 mb-4">
                  流水要求（Wagering Requirements）是指在使用優惠後，需要投注多少金額才能申請出金。這是娛樂城防止濫用優惠的機制。
                </p>
                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-cyan-400 font-bold mb-2">計算公式：</p>
                  <p className="text-slate-300 font-mono text-lg mb-2">
                    流水要求 = (優惠金額 + 儲值金額) × 流水倍數
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">計算範例</h2>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">範例一：體驗金168</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>優惠金額：168 元</li>
                    <li>儲值金額：0 元（體驗金無需儲值）</li>
                    <li>流水倍數：10 倍</li>
                    <li>流水要求 = (168 + 0) × 10 = <strong className="text-cyan-400">1,680 元</strong></li>
                    <li>這表示您需要投注總額達到 1,680 元才能申請出金</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">範例二：首存優惠</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>儲值金額：5,000 元</li>
                    <li>優惠金額：5,000 元（100% 首存優惠）</li>
                    <li>流水倍數：15 倍</li>
                    <li>流水要求 = (5,000 + 5,000) × 15 = <strong className="text-cyan-400">150,000 元</strong></li>
                    <li>這表示您需要投注總額達到 150,000 元才能申請出金</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">遊戲貢獻度</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <p className="text-slate-300 mb-4">
                  不同遊戲對流水的貢獻度不同，有些遊戲貢獻 100%，有些可能只有 50% 或更低：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-emerald-400 font-bold mb-2">100% 貢獻度：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                      <li>真人百家樂</li>
                      <li>體育投注</li>
                      <li>大部分電子遊戲</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-amber-400 font-bold mb-2">50% 貢獻度：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                      <li>部分特殊遊戲</li>
                      <li>某些獎池遊戲</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 mt-4">
                  <p className="text-amber-400 font-bold mb-2">⚠️ 重要：</p>
                  <p className="text-slate-300 text-sm">
                    如果某遊戲貢獻度為 50%，您需要投注 2 倍金額才能完成相同的流水要求。例如：流水要求 1,000 元，在 50% 貢獻度遊戲中需要投注 2,000 元。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">如何查看流水進度？</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <p className="text-slate-300 mb-4">您可以在「我的帳戶」→「優惠記錄」中查看：</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                  <li>當前流水進度</li>
                  <li>剩餘流水要求</li>
                  <li>優惠使用期限</li>
                  <li>完成進度百分比</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 完成流水技巧</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 選擇貢獻度 100% 的遊戲，可以更快完成流水</li>
                <li>• 合理規劃投注金額，不要過度投注</li>
                <li>• 注意優惠使用期限，在期限內完成流水</li>
                <li>• 如果無法完成流水，優惠金額會被扣除</li>
                <li>• 完成流水後，可以申請出金</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

