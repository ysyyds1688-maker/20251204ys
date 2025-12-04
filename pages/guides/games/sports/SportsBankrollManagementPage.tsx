import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const SportsBankrollManagementPage = () => {
  return (
    <>
      <SEO
        title="體育投注資金管理法 - 凱利公式與固定比例策略"
        description="學習體育投注資金管理法，包含凱利公式、固定比例下注等策略，幫助玩家長期穩定獲利。"
        keywords="資金管理,凱利公式,固定比例,體育投注策略"
        canonical="/guides/games/sports/bankroll-management"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '體育投注攻略', url: '/guides/games/sports' },
              { name: '資金管理法', url: '/guides/games/sports/bankroll-management' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">體育投注資金管理法</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              資金管理是體育投注成功的關鍵。即使您對賽事分析再準確，如果沒有正確的資金管理策略，也很難長期穩定獲利。本教學將深入解析凱利公式、固定比例等各種資金管理策略，幫助您建立適合自己的資金管理系統。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">一、固定比例下注法</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-white mb-3">方法說明</h3>
                <p className="text-slate-300 mb-3">
                  每次下注金額 = 總資金 × 固定比例（建議 2-5%）
                </p>
                <div className="bg-slate-700 rounded-lg p-4 mb-3">
                  <p className="text-slate-300 mb-2"><strong className="text-white">範例：</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>總資金：10,000 元</li>
                    <li>固定比例：3%</li>
                    <li>每次下注：10,000 × 3% = 300 元</li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-emerald-400 font-bold mb-2">優點：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                      <li>風險可控</li>
                      <li>不會一次輸光</li>
                      <li>適合新手</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-bold mb-2">缺點：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                      <li>獲利速度較慢</li>
                      <li>無法最大化獲利</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">二、凱利公式（Kelly Criterion）</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-white mb-3">公式說明</h3>
                <div className="bg-slate-700 rounded-lg p-4 mb-3">
                  <p className="text-slate-300 mb-2"><strong className="text-white">凱利公式：</strong></p>
                  <p className="text-slate-300 font-mono text-lg mb-2">
                    f = (bp - q) / b
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                    <li><strong className="text-white">f：</strong>應該下注的資金比例</li>
                    <li><strong className="text-white">b：</strong>賠率（例如 2.0 = 1:1）</li>
                    <li><strong className="text-white">p：</strong>獲勝機率（例如 0.6 = 60%）</li>
                    <li><strong className="text-white">q：</strong>失敗機率（1 - p）</li>
                  </ul>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <p className="text-slate-300 mb-2"><strong className="text-white">計算範例：</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                    <li>賠率：2.0（1:1）</li>
                    <li>獲勝機率：60%（0.6）</li>
                    <li>失敗機率：40%（0.4）</li>
                    <li>f = (2.0 × 0.6 - 0.4) / 2.0 = 0.4 = 40%</li>
                    <li>建議下注總資金的 40%（但實際建議使用 50% 的凱利值，即 20%）</li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-4">
                <p className="text-amber-400 font-bold mb-2">⚠️ 注意：</p>
                <p className="text-slate-300 text-sm">
                  凱利公式計算出的比例可能過高，建議使用「分數凱利」（Fractional Kelly），即使用計算結果的 50%，以降低風險。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">三、單位投注法（Unit Betting）</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">方法說明</h3>
                <p className="text-slate-300 mb-3">
                  將資金分成多個「單位」，根據信心程度決定下注單位數：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                  <li><strong className="text-white">1 單位：</strong>信心較低，小額投注</li>
                  <li><strong className="text-white">2-3 單位：</strong>信心中等，正常投注</li>
                  <li><strong className="text-white">4-5 單位：</strong>信心很高，大額投注</li>
                </ul>
                <div className="bg-slate-700 rounded-lg p-4 mt-4">
                  <p className="text-slate-300 mb-2"><strong className="text-white">範例：</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                    <li>總資金：10,000 元</li>
                    <li>1 單位 = 200 元（總資金的 2%）</li>
                    <li>信心高時下注 5 單位 = 1,000 元</li>
                    <li>信心低時下注 1 單位 = 200 元</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">四、止損與止盈</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-3">止損點設定</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>建議設定為總資金的 20-30%</li>
                    <li>達到止損點立即停止投注</li>
                    <li>避免情緒化追回損失</li>
                    <li>休息後再重新開始</li>
                  </ul>
                </div>
                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">止盈點設定</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>建議設定為總資金的 50-100%</li>
                    <li>達到止盈點可以提領部分獲利</li>
                    <li>保留部分資金繼續投注</li>
                    <li>保護已獲得的利潤</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 策略建議</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 新手建議使用固定比例下注法，風險最低</li>
                <li>• 有經驗的玩家可以嘗試凱利公式或單位投注法</li>
                <li>• 無論使用哪種方法，都要嚴格執行止損止盈</li>
                <li>• 不要因為連續輸了幾場就改變策略</li>
                <li>• 定期檢視和調整資金管理策略</li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">相關教學</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/games/sports/odds-analysis" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  賠率分析 →
                </Link>
                <Link to="/guides/games/sports/live-betting" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  滾球投注技巧 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

