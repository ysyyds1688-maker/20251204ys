import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const PokerStartingHandsPage = () => {
  return (
    <>
      <SEO
        title="德州撲克起手牌範圍 - 翻牌前選擇策略"
        description="學習德州撲克起手牌範圍（Pre-flop Ranges），了解翻牌前應該選擇哪些手牌，提高勝率。"
        keywords="起手牌範圍,Pre-flop Ranges,德州撲克起手牌,撲克策略"
        canonical="/guides/games/poker/starting-hands"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '德州撲克攻略', url: '/guides/games/poker' },
              { name: '起手牌範圍', url: '/guides/games/poker/starting-hands' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">德州撲克起手牌範圍</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              起手牌範圍（Pre-flop Ranges）是德州撲克翻牌前最重要的決策。選擇正確的起手牌範圍可以大大提高勝率，減少不必要的損失。本教學將詳細解析不同位置和情況下的起手牌選擇策略。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">一、起手牌分類</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-emerald-400 mb-3">頂級起手牌</h3>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• AA, KK, QQ, JJ</li>
                    <li>• AK（同花/不同花）</li>
                    <li>• AQ（同花）</li>
                  </ul>
                  <p className="text-slate-400 text-xs mt-3">任何位置都可以加注或全押</p>
                </div>
                <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-amber-400 mb-3">強起手牌</h3>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• TT, 99, 88</li>
                    <li>• AQ（不同花）</li>
                    <li>• AJ（同花）</li>
                    <li>• KQ（同花）</li>
                  </ul>
                  <p className="text-slate-400 text-xs mt-3">大部分位置可以加注</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-3">邊緣起手牌</h3>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• 77, 66, 55</li>
                    <li>• AJ（不同花）</li>
                    <li>• KQ（不同花）</li>
                    <li>• 同花連牌</li>
                  </ul>
                  <p className="text-slate-400 text-xs mt-3">需要根據位置和情況判斷</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">二、位置與起手牌選擇</h2>
              <div className="space-y-4 text-slate-300">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">1. 早期位置（UTG, UTG+1）</h3>
                  <p className="mb-3">早期位置需要最緊的起手牌範圍：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>只玩頂級和強起手牌</li>
                    <li>建議範圍：AA, KK, QQ, JJ, TT, AK, AQ（同花）</li>
                    <li>避免玩邊緣牌，容易被後位玩家加注</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">2. 中期位置（MP, MP+1）</h3>
                  <p className="mb-3">可以稍微放寬範圍：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>可以加入 99, 88, AQ（不同花）, AJ（同花）</li>
                    <li>同花連牌（如 9♠8♠）也可以考慮</li>
                    <li>注意後位玩家的行動</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">3. 後期位置（CO, BTN）</h3>
                  <p className="mb-3">可以玩最寬的範圍：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>可以玩大部分對子、同花牌、連牌</li>
                    <li>利用位置優勢，可以更靈活</li>
                    <li>可以嘗試偷盲（Steal）</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">4. 盲注位置（SB, BB）</h3>
                  <p className="mb-3">需要根據加注情況調整：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>如果無人加注，可以玩較寬範圍</li>
                    <li>如果有人加注，需要更緊的範圍</li>
                    <li>注意防守盲注的成本</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">三、對子起手牌策略</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">大對子（JJ+）</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li>任何位置都可以加注</li>
                      <li>如果被再加注，可以考慮全押（取決於籌碼深度）</li>
                      <li>翻牌後如果沒有中三條，要謹慎</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-3">中對子（77-TT）</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li>中後位置可以加注</li>
                      <li>早期位置可以跟注或棄牌</li>
                      <li>翻牌後如果中三條，要積極下注</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-fuchsia-400 mb-3">小對子（22-66）</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li>主要目標是中三條</li>
                      <li>適合跟注進入，不建議加注</li>
                      <li>如果翻牌沒有中三條，通常棄牌</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-3">同花起手牌</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li>同花牌有潛力中同花或順子</li>
                      <li>後位可以玩較寬的同花範圍</li>
                      <li>注意同花連牌比同花不連牌更有價值</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 選擇建議</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 新手建議從緊的範圍開始，只玩強起手牌</li>
                <li>• 隨著經驗增加，可以逐步放寬範圍</li>
                <li>• 根據對手風格調整，對抗緊玩家可以放寬，對抗鬆玩家要更緊</li>
                <li>• 注意籌碼深度，深籌碼可以玩更多起手牌</li>
                <li>• 記住：起手牌只是開始，翻牌後的決策同樣重要</li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">相關教學</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/games/poker/position-play" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  位置策略 →
                </Link>
                <Link to="/guides/games/poker/tournament-strategy" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  錦標賽策略 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

