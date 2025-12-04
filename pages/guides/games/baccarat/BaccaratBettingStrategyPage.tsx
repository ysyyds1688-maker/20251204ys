import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';

export const BaccaratBettingStrategyPage = () => {
  return (
    <>
      <SEO
        title="百家樂下注策略 - 資金管理與下注技巧"
        description="學習百家樂下注策略，包含資金管理、下注比例、止損止盈等技巧，幫助玩家長期穩定獲利。"
        keywords="百家樂下注策略,百家樂資金管理,百家樂止損,百家樂下注技巧"
        canonical="/guides/games/baccarat/betting-strategy"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '百家樂攻略', url: '/guides/games/baccarat' },
              { name: '下注策略', url: '/guides/games/baccarat/betting-strategy' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">百家樂下注策略</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              下注策略是百家樂獲利的關鍵。即使掌握了看路法，如果沒有正確的資金管理和下注策略，也很難長期穩定獲利。本教學將深入解析各種下注策略，幫助您建立適合自己的投注系統。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">一、資金管理基礎</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. 固定比例下注法</h3>
                  <p className="mb-3">這是最基礎也是最安全的資金管理方法：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>每次下注金額 = 總資金 × 固定比例（建議 2-5%）</li>
                    <li>例如：總資金 10,000 元，固定比例 3%，每次下注 300 元</li>
                    <li>優點：風險可控，不會一次輸光</li>
                    <li>缺點：獲利速度較慢</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. 馬丁格爾策略（Martingale）</h3>
                  <p className="mb-3">輸了加倍下注，贏了回到初始金額：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>初始下注：100 元</li>
                    <li>輸了：下次下注 200 元</li>
                    <li>再輸：下次下注 400 元</li>
                    <li>贏了：回到 100 元</li>
                    <li><strong className="text-red-400">警告：</strong>需要足夠資金，風險較高</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">3. 反馬丁格爾策略（Reverse Martingale）</h3>
                  <p className="mb-3">贏了加倍下注，輸了回到初始金額：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>適合在「長龍」出現時使用</li>
                    <li>可以快速累積獲利</li>
                    <li>需要設定止盈點，避免回吐</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">二、止損與止盈</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-white mb-3">止損點設定</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                  <li>建議設定為總資金的 20-30%</li>
                  <li>達到止損點立即停止遊戲</li>
                  <li>避免情緒化追回損失</li>
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">止盈點設定</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                  <li>建議設定為總資金的 50-100%</li>
                  <li>達到止盈點可以考慮提領部分獲利</li>
                  <li>保留部分資金繼續遊戲</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">三、下注時機選擇</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. 跟勢投注</h3>
                  <p>當出現明顯的「長龍」時（連續 5 次以上相同結果），可以考慮跟勢投注。但要注意：</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>長龍隨時可能中斷</li>
                    <li>不要過度追勢</li>
                    <li>設定止損點</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. 反勢投注</h3>
                  <p>當出現明顯的「長龍」時，也可以選擇反勢投注（賭長龍會中斷）。這種策略風險較高，需要謹慎使用。</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">3. 觀察後再下注</h3>
                  <p>建議先觀察 10-20 局，了解當前趨勢後再開始下注，避免盲目投注。</p>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 策略建議</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 新手建議使用固定比例下注法，風險最低</li>
                <li>• 有經驗的玩家可以嘗試馬丁格爾或反馬丁格爾策略</li>
                <li>• 無論使用哪種策略，都要嚴格執行止損止盈</li>
                <li>• 不要因為連續輸了幾局就改變策略</li>
                <li>• 保持冷靜，避免情緒化投注</li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">相關教學</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/games/baccarat/basics" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  百家樂基礎教學 →
                </Link>
                <Link to="/guides/games/baccarat/road-reading" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  百家樂看路法 →
                </Link>
                <Link to="/guides/games/baccarat/advanced-tips" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  百家樂進階技巧 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

